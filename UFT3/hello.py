
def arrayflat(listed):
    new_array = []
    for i in listed:
        if type(i) is list:
            for element in i:
                new_array.append(element)
        else:
            new_array.append(i)
    return new_array

listed = [1, [2,3], [4, [5,6]]]
print(arrayflat(listed))