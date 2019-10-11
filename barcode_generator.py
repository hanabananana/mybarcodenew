# barcode_generator.py

import barcode

def barcode_input():
    print("12자리 바코드 숫자를 입력해주세요!")
    input_data = input()
    return input_data
   

def barcode_generator():
    number13 = barcode_input()
    print("진짜 잘 들어왔니?: ", number13)
    image = barcode.get_barcode_class('ean13')
    
    image_bar = image(u'{}'.format(number13))
    file = open('D:\\barcode2.svg', "wb")
    image_bar.write(file)
    print( "barcode generation completed")

barcode_generator()

