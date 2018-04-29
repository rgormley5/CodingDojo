name = ["Anna", "Eli", "Pariece", "Brendan", "Amy", "Shane", "Oscar"]
favorite_animal = ["horse", "cat", "spider", "giraffe", "ticks", "dolphins", "llamas"]

def fun(lst1, lst2):
    dic = {}
    newlst = []

    newlst = zip(name, favorite_animal)
    # print newlst

    newlst = dict(newlst)
    print newlst

fun(name, favorite_animal)