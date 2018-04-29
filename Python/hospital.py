class Hospital(object):
    def __init__(self, name, capacity):
        self.patients = []
        self.name = name
        self.capacity = capacity

    def admit(self, var1, var2):
        if len(self.patients) < self.capacity:
            self.patients.append(var1)
            var1.bed_number = var2
            # var1.var2 = var1.bed_number
        else:
            print "admission complete, hospital full"
        return self

    def discharge(self, arg1):
        for i in self.patients:
            if i == arg1:
                self.patients.remove(arg1)
        arg1.bed_number = 0
        return self

    def displayHospital(self):
        print "hospital_name: ", self.name
        print "hospital_capacity: ", self.capacity
        print "hospital_patients: ", self.patients
        return self

class Patient(object):
    def __init__(self, id, patient_name):
        self.allergies = []
        self.bed_number = 0
        self.id = id
        self.patient_name = patient_name

    def displayPatient(self):
        print "patient_id: ", self.id
        print "patient_name: ", self.patient_name
        print "patient_allergies: ", self.allergies
        print "patient_bed: ", self.bed_number
        return self

hospital = Hospital("Hospital_Name", 3)
# hospital.displayHospital()
patient1 = Patient(23, "Patient_Name_1")
# patient1.displayPatient()

hospital.admit(patient1, 5).displayHospital()
patient1.displayPatient()
hospital.discharge(patient1)
patient1.displayPatient()
hospital.displayHospital()