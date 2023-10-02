
conversion_code = {  # Uppercase Alphabets
    'A': 'Z',
    'B': 'Y',
    'C': 'X',
    'D': 'W',
    'E': 'V',
    'F': 'U',
    'G': 'T',
    'H': 'S',
    'I': 'R',
    'J': 'Q',
    'K': 'P',
    'L': 'O',
    'M': 'N',
    'N': 'M',
    'O': 'L',
    'P': 'K',
    'Q': 'J',
    'R': 'I',
    'S': 'H',
    'T': 'G',
    'U': 'F',
    'V': 'E',
    'W': 'D',
    'X': 'C',
    'Y': 'B',
    'Z': 'A',
    }


def encode(msg):

    encoded_msg = ''

    
    # Encoding Logic

    for i in range(0, len(msg)):

        if ord(msg[i]) % 2 == 0:
            encoded_msg = encoded_msg + msg[i] + conversion_code[msg[i]]
        else:

            if msg[i] in conversion_code.keys():
                encoded_msg = encoded_msg + conversion_code[msg[i]]
            else:
                encoded_msg += msg[i]

    return encoded_msg


print(encode("ABC"))

def decode(code):
    decoded_msg = ''

    i = 0
    while i < len(code):

        if i + 1 < len(code) and conversion_code[code[i]] == code[i
                + 1]:

            decoded_msg = decoded_msg + code[i]
            i = i + 1
        else:

            decoded_msg = decoded_msg + conversion_code[code[i]]

        i = i + 1

    return decoded_msg


print(decode("FTGH"))

test_data = {
    'ABC': 'ZBYX',
    'XYZ': 'XCBZA',
    'GHI': 'THSR',
    'NOP': 'NMLPK',
    'JKL': 'JQPLO',
    'UTS': 'FTGH',
    }


def testfunction():

    print('test encode function')
    for x in test_data:

        print (x, ':', test_data.get(x), bool(test_data.get(x)
               == encode(x)))


    print('test decode function')
    for (key, value) in test_data.items():

        print (value, ':', key, bool(key == decode(value)))


testfunction()
