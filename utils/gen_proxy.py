proxy = ""
f = open("backcn", "r")
for line in f:
    if line[:2] == "||":
        proxy += line[2:-1] + '\n'

# print(proxy)

f.close()

# write file
f = open("site/proxy", 'w+')
f.write(proxy)
f.close()
