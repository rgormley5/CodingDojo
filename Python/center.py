class Call(object):
    def __init__(self, unique_id, call_name, phone_number, call_time, call_reason):
        self.unique_id = unique_id
        self.call_name = call_name
        self.phone_number = phone_number
        self.call_time = call_time
        self.call_reason = call_reason

    def display(self): 
        print "unique_id is: ", self.unique_id
        print "call_name is: ", self.call_name
        print "phone_number is: ", self.phone_number
        print "call_time is: ", self.call_time
        print "call_reason is: ", self.call_reason
        return self

class CallCenter(object):
    def __init__(self):
        self.calls = []
        self.queue_size = len(self.calls)

    # def __init__(self):
    #     super(self)

    def add(self, arg1):
        self.calls.append(arg1)
        return self

    def remove(self):
        self.calls.pop(calls[0])
        return self

    def info(self):
        for i in self.calls:
            # go through array self.calls, each i is an object, call the object key (e.g. i.call_name) to get the corresponding key
            print "call_name: ", i.call_name, "phone_number: ", i.phone_number, "queue_length: ", self.queue_size
        return self

test = Call("uniqueID", "namename", "(999) 999 - 9999", "1:23", "wat up")
fork = CallCenter()
fork.add(test).info()
