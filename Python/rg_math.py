# Part 1

# class MathDojo(object):
#     def __init__(self, num):
#         self.num = 0

#     def add(self, *nums):
#         self.num += sum(nums)
#         return self

#     def subtract(self, *args):
#         self.num -= sum(args)
#         return self

#     def result(self):
#         print self.num
#         return self

# md = MathDojo(0)
# md.add(2).add(2,5).subtract(3,2).result()

# Part 2

class MathDojo(object):
    def __init__(self, num):
        self.num = 0

    def add(self, *nums):
        for i in nums:
            if type(i) == list:
                for x in i:
                    self.num += x
                    print "do a"
            elif type(i) == tuple:
                for x in i:
                    self.num += x
                    print "do b"
            elif type(i) == int:
                self.num += i
                print "do c"
        return self

    def subtract(self, *args):
        for i in args:
            if type(i) == list:
                for x in i:
                    self.num -= x
                    print "do d"
            elif type(i) == tuple:
                for x in i:
                    self.num -= x
                    print "do e"
            elif type(i) == int:
                self.num -= i
                print "do f"
        return self

    def result(self):
        print self.num
        return self

md = MathDojo(0)
md.add([1], 3,4).add([3,5,7,8], [2,4.3,1.25]).subtract(2, [2,3], [1.1,2.3]).result()