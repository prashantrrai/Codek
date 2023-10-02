
conversion_code = {
 
    # Uppercase Alphabets
    'A': 'Z', 'B': 'Y', 'C': 'X', 'D': 'W', 'E': 'V', 'F': 'U',
    'G': 'T', 'H': 'S', 'I': 'R', 'J': 'Q', 'K': 'P', 'L': 'O',
    'M': 'N', 'N': 'M', 'O': 'L', 'P': 'K', 'Q': 'J', 'R': 'I',
    'S': 'H', 'T': 'G', 'U': 'F', 'V': 'E', 'W': 'D', 'X': 'C',
    'Y': 'B', 'Z': 'A'
}


def encode(msg):

    encoded_msg = ""
    # global encoded_msg


    #Encoding Logic
    for i in range(0, len(msg)):

        if ord(msg[i]) % 2 == 0:
            encoded_msg = encoded_msg + (msg[i] + conversion_code[msg[i]])

        else:
            if msg[i] in conversion_code.keys():
                encoded_msg = encoded_msg + conversion_code[msg[i]]
            else:
                encoded_msg += msg[i]


    return(encoded_msg)

# print(encode("ABC"))



def decode(code):
    decoded_msg= ""
    # global decoded_msg

    # for i in range(0, len(code)):
    #     decoded_msg = decoded_msg + conversion_code[code[i]]
    # return decoded_msg


    # Decoding Logic
    # for i in range(len(code)):
    #     print(i)

    #     if (((i+1)<len(code)) and (conversion_code[code[i]] == code[i+1])):
    #         #it is not even
    #         decoded_msg = decoded_msg + code[i]
             

    #     else:
    #         decoded_msg = decoded_msg + conversion_code[code[i]] 
       
    # # for i in range(len(code)):
    # #     if 
    # return decoded_msg


    i = 0
    while i < len(code):
        # print(i)

        if (((i+1)<len(code)) and (conversion_code[code[i]] == code[i+1])):
            #it is not even
            decoded_msg = decoded_msg + code[i]
            i=i+1
             

        else:
            decoded_msg = decoded_msg + conversion_code[code[i]] 

        i = i + 1

    return decoded_msg
# print(decode("FTGH"))


test_data = {
    'ABC': 'ZBYX',
    'XYZ': 'XCBZA',
    'GHI': 'THSR',
    'NOP': 'NMLPK',
    'JKL': 'JQPLO',
    'UTS': 'FTGH',
}

def testfunction():
    # for i in range(len(test_data)):
    #     print(test_data[i])
    # for x,y in test_data.items():
        # print(x, ":" , y) 
        # encode(x)
        # print(x, ":" , y,bool( y == encode(x)))
        # print(encode(x))

        print('test encode function')
        for x in test_data:
            # # print(x)
            # print(x, ":" , test_data[x],bool(test_data[x])== encode(x))
            # # print(test_data.get(x))
            # print(str(test_data[x]))
            # print(str(encode(x)))
            # print(bool(str(test_data[x]))== str(encode(x)))
            # print(x, ":" , test_data.get(x),bool( str(test_data.get(x) )== str(encode(x))))
            # print(bool( (test_data.get(key) )== (encode(key))))
            print(x,":",test_data.get(x),bool( (test_data.get(x) )== (encode(x))))



        print('test decode function')

        for key,value in test_data.items():
            # # print(x)
            # print(x, ":" , test_data[x],bool(test_data[x])== encode(x))
            # print(test_data.get(key))
            # print(value)
            # print(str(test_data[x]))
            # print(str(encode(x)))
            # print(bool(str(test_data[x]))== str(encode(x)))
            # print(x, ":" , test_data.get(x),bool( str(test_data.get(x) )== str(encode(x))))
            # print(bool(key== (decode(value))))
            print(value,":",key,bool(key== (decode(value))))

testfunction()

