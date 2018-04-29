
def name(word_list, char):
    newList = []

    for i in range (0, len(word_list)):
        for j in range (0, len(word_list[i])):
            # print word_list[i][j]
            if word_list[i][j] == char:
                newList.append(word_list[i])
    print newList

word_list = ['hello','world','my','name','is','Anna']
char = 'o'

name(word_list, char)