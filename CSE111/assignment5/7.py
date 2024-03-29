class Dolls:
    def __init__(self,name,taka,lst=[]):
        self.name=name
        self.taka=taka
        self.lst=lst
        
    
    def __gt__(self,other):
        return self.taka>other.taka

    def __add__(self,other):
        name=self.name+' '+other.name
        taka=self.taka+other.taka
        lst=[self.name,other.name]

        obj=Dolls(name,taka,lst)
        return obj
    
    def detail(self):
        if len(self.lst)==0:
            return f'Doll: {self.name} \nTotal Price: {self.taka}'
        else:
            return f"Dolls: {self.name} \nTotal Price: {self.taka}"
            
            



obj_1 = Dolls("Tweety", 2500)
print(obj_1.detail())
if obj_1 > obj_1:
    print("Congratulations! You get the Tweety as a gift!")
else:
    print("Thank you!")

print("=========================")
obj_2 = Dolls("Daffy Duck", 1800) 
print(obj_2.detail())
if obj_2 > obj_1:
    print("Congratulations! You get the Tweety as a gift!")
else:
    print("Thank you!")

print("=========================")
obj_3 = Dolls("Bugs Bunny", 3000)
print(obj_3.detail())
if obj_3 > obj_1:
    print("Congratulations! You get the Tweety as a gift!")
else:
    print("Thank you!")

print("=========================")
obj_4 = Dolls("Porky Pig", 1500)
print(obj_4.detail())
if obj_4 > obj_1:
    print("Congratulations! You get the Tweety as a gift!")
else:
    print("Thank you!")

print("=========================")
obj_5 = obj_2 + obj_3
print(obj_5.detail())
if obj_5 > obj_1:
    print("Congratulations! You get the Tweety as a gift!")
else:
    print("Thank you!")
