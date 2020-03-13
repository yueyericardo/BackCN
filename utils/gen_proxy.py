import os

proxy = ""
f = open("backcn", "r")
for line in f:
    if line[:2] == "||":
        proxy += line[2:-1] + '\n'

# print(proxy)

f.close()

# write file
mode = 'a' if os.path.exists("site/proxy") else 'w'
f = open("site/proxy", mode)
f.write(proxy)
f.close()
