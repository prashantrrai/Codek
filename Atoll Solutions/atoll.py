# msg = input("Enter the String: ")
msg = 'ABC'


conversion_code = {
 
    # Uppercase Alphabets
    'A': 'Z', 'B': 'Y', 'C': 'X', 'D': 'W', 'E': 'V', 'F': 'U',
    'G': 'T', 'H': 'S', 'I': 'R', 'J': 'Q', 'K': 'P', 'L': 'O',
    'M': 'N', 'N': 'M', 'O': 'L', 'P': 'K', 'Q': 'J', 'R': 'I',
    'S': 'H', 'T': 'G', 'U': 'F', 'V': 'E', 'W': 'D', 'X': 'C',
    'Y': 'B', 'Z': 'A'
}


encoded_msg = ""

#Encoding Logic
for i in range(0, len(msg)):

    if ord(msg[i]) % 2 == 0:
        #A -> A + Z = AZ
        encoded_msg = encoded_msg + (msg[i] + conversion_code[msg[i]])
        # print(encoded_msg)
    else:

        if msg[i] in conversion_code.keys():
            encoded_msg = encoded_msg + conversion_code[msg[i]]
        else:
            encoded_msg += msg[i]





code = "ZBYX"

decoded_msg= ""


# Decoding Logic
# for i in range(0, len(code)):
#     print(code[i])
#     if conversion_code[code[i]] == code[i+1]:
#         #it is not even
#         decoded_msg = decoded_msg + code[i]
#         continue

#     else:
#         decoded_msg = decoded_msg + conversion_code[code[i]] 


# Other Logic
for i in range(0, len(code)):
    decoded_msg = decoded_msg + conversion_code[code[i]]



# Printing converted output
print("Encoded String: ",encoded_msg)
print("Decoded String:  ",decoded_msg)