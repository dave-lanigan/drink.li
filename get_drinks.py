import requests
from bs4 import BeautifulSoup
import json
import re

"""
Create append function
Normalize on ounce
"""

def get_original_15():
    def parse_me(phrase):
        amount,unit,que,garnish=None,None,None,None
        phrase = phrase.lower()
        
        #get amount
        out = re.findall("\d",phrase)
        if len(out)==1:
            amount = int( out[0] )
        elif len(out)==2 and len(re.findall("\d/\d",phrase) )!=0:
            amount = round( float(out[0])/float(out[1]),1 )
        
        #get unit
        units = ["ounce","oz","ounces","tsp","splash","teaspoon"]
        for u in units:
            if phrase.find(u)!=-1:
                unit=u
        
        #get garnish
        if phrase.find("garnish")!=-1:
            garnish=phrase.replace("garnish: ","").replace('\n',"")
        
        #que
        if unit!=None:
            que = phrase[ phrase.find(unit)+len(unit) + 1: ]
            que=que.replace("\n","")
        
        #conform units
        if unit in ["ounces","ounce"]:
            unit="oz"
        if unit=="teaspoon":
            unit="tsp"

        #filter
        D={ "amount": amount, "unit": unit, "que": que, "garnish": garnish }
        ND={}
        for key in D:
            if D[key]!=None:
                ND[key]=D[key]
        return ND



    url="https://www.liquor.com/popular-cocktails-4845950"

    out = requests.get( url ).content
    soup = BeautifulSoup( out, 'html.parser' )



    names,link_names=[],[]
    for div in soup.findAll(class_="comp list-item ordered-list__content content-list-sc mntl-sc-list-item mntl-sc-page mntl-block" ):
        names.append( div.find("h2").text.strip() )
        link_names.append( div.find("h2").text.strip().lower().replace(" ","-") )

    base_url="https://www.liquor.com/recipes/{}/"

    D={}
    for i,name in enumerate( link_names ):
        url=base_url.format(name)
        out = requests.get( url ).content
        soup = BeautifulSoup( out, 'html.parser' )
        
        ingrediants=[]
        
        s=soup.find(class_="comp section--ingredients section")
        
        for tag in s.find("ul").findAll("li"):
            out=parse_me(tag.text)
            if len(out)!=0:
                ingrediants.append( out )
        
        D[name]= {"token": name, "key": i, "name": names[i], "ingredients": ingrediants }
        

    with open("data/data.json","w") as json_file:
        json.dump(D,json_file)

    print("Done!")


def append_to_file():
    pass


get_original_15()
