my_dict = {
  "Speros": "(555) 555-5555",
  "Michael": "(999) 999-9999",
  "Jay": "(777) 777-7777"
}

# def name(dic):
#     # print dic.keys()
#     newtup = ()
#     for i in dic.keys():
#         # print i
#         newtup = newtup + (i,)
#         newtup = newtup + ()
#     print newtup

# name(my_dict)

def name(dic):
    # print dic.keys()
    newdic = []
    for i in dic.items():
        # print i
        newdic.append(i)
    print newdic
    

name(my_dict)