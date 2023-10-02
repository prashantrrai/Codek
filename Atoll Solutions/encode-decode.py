
# Python code to demonstrate 
# decode() 
    
msg = "ABC"
    
# encoding string  
msg_encoding = msg.encode(encoding='utf8') 
    
# printing the encoded string 
print ("The encoded string in base64 format is : ",msg_encoding) 
    
# printing the original decoded string  
print ("The decoded string is : ",msg_encoding.decode('utf8', 'strict'))

