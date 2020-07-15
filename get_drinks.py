import requests
from bs4 import BeautifulSoup
import json

url="https://www.townandcountrymag.com/leisure/drinks/g13092298/popular-bar-drinks-to-order/"

out = requests.get( url ).content
soup = BeautifulSoup( out, 'html.parser' )


out = soup.findAll(class_="listicle-slide listicle-slide-portrait listicle-slide-image" )[0].findAll("p")[1]

print(out.text.split("-"))

# L = soup.findAll(class_="listicle-slide listicle-slide-portrait listicle-slide-image" )
# drinks={}
# for i in range(21)
#     s = L[i].find("span").text
#     tag = s.replace(" ","-").lower()



#     drinks[tag]={ "key": i, "tag": tag, "name": s, "ingrediants": ing }