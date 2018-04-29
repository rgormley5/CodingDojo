# students = [
#      {'first_name':  'Michael', 'last_name' : 'Jordan'},
#      {'first_name' : 'John', 'last_name' : 'Rosales'},
#      {'first_name' : 'Mark', 'last_name' : 'Guillen'},
#      {'first_name' : 'KB', 'last_name' : 'Tonel'}
# ]

# Part 1

# def cool(arr):
#     for i in range (0, len(arr)):
#         # str_len = ""
#         # str_len += arr[i]['first_name']
#         # str_len += arr[i]['last_name']

#         print arr[i]['first_name'] + " " + arr[i]['last_name']

# cool(students)

# Part 2

users = {
    'Students': [
        {'first_name':  'Michael', 'last_name' : 'Jordan'},
        {'first_name' : 'John', 'last_name' : 'Rosales'},
        {'first_name' : 'Mark', 'last_name' : 'Guillen'},
        {'first_name' : 'KB', 'last_name' : 'Tonel'}
    ],
    'Instructors': [
        {'first_name' : 'Michael', 'last_name' : 'Choi'},
        {'first_name' : 'Martin', 'last_name' : 'Puryear'}
    ]
}

def cool(arr):
    print users.keys()[0]
    for i in range (0, len(arr['Students'])):
        count = 0
        for j in range (0, len(arr['Students'][i]['last_name'])):
            count += 1
        for k in range (0, len(arr['Students'][i]['first_name'])):
            count += 1
        print i+1, arr['Students'][i]['first_name'], arr['Students'][i]['last_name'], count

    print users.keys()[1]
    for i in range (0, len(arr['Instructors'])):
        print i+1, arr['Students'][i]['first_name'], arr['Students'][i]['last_name'], count

cool(users)
