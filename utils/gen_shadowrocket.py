from datetime import datetime

output = """# Shadowrocket: {}
[General]
bypass-system = true
skip-proxy = 192.168.0.0/16, 10.0.0.0/8, 172.16.0.0/12, localhost, *.local, e.crashlytics.com, captive.apple.com
bypass-tun = 10.0.0.0/8,100.64.0.0/10,127.0.0.0/8,169.254.0.0/16,172.16.0.0/12,192.0.0.0/24,192.0.2.0/24,192.88.99.0/24,192.168.0.0/16,198.18.0.0/15,198.51.100.0/24,203.0.113.0/24,224.0.0.0/4,255.255.255.255/32
dns-server =
update-url = https://raw.githubusercontent.com/yueyericardo/BackCN/master/backcn.conf


[Rule]
{}
FINAL,DIRECT

[Host]
localhost = 127.0.0.1
"""


template = "DOMAIN-SUFFIX,{},PROXY"
proxy = ""
f = open("backcn", "r")
for line in f:
    if line[:2] == "||":
        proxy += template.format(line[2:-1]) + '\n'

TIMESTAMP = "{0:%Y-%m-%d %H:%M:%S}".format(datetime.now())
# print(output.format(TIMESTAMP, proxy))

f.close()

# write file
f = open("backcn.conf", "w")
f.write(output.format(TIMESTAMP, proxy))
f.close()
