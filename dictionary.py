f = open("dictionary.txt","r")
file = f.read()
file = file.split("/\n");
dictionary = {}

f.close()
html = '''
<table>
    <tr>
        <td>
        Word
        </td>
        <td>
        Part of Speech
        </td>
        <td>
        Definition
        </td>
    </tr>
'''
# ___________________________________________________________________
# find how many words
counter = 0
for i in file:
    counter += 1
# print(counter / 3)
#_____________________________________________
#now loop through the list and add to the html table
n = 0 #this is the actual word counter whereas counter counts all the elements
while (n < 100):
    html += '<tr>\n	<td>' + file[n] + '</td>\n	' + '<td>' + file[n+1] + '</td>\n	' + '<td>' + file[n+2] + '</td>\n</tr>\n' 
    n += 3

    
html += "</table>"
print(file)
print(html)
