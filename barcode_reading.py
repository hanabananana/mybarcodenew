# barcode_reading.py

import pyzbar.pyzbar as pyzbar
import cv2
import matplotlib.pyplot as plt
import os

barcode_data_path_list = ['\\barcode_data\\class_number', '\\barcode_data\\health', '\\barcode_data\\recyclable', '\\barcode_data\\decompose', '\\barcode_data\\alternatives']

path = "D:\\barcode_0525\\"
os.chdir(path)

img = cv2.imread('capture2.png')
print("completed")
gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
print("completed")
plt.imshow(gray, cmap='gray')

decoded = pyzbar.decode(gray)
#print(decoded)
#print(decoded[0].data.decode('utf-8'))
digits = ''
for d in decoded:
    print(d.data.decode('utf-8'))
    print(d.type)
    
    digits = d.data.decode('utf-8') # str

print("13 digits: ", digits)
print()



# code to show barcode information
# img version

digits = '1313'

for i in range(4):
    print("i: ", i)
    print(barcode_data_path_list[i])
    print(str(digits[i]) + '.png')
    
    thepath = os.path.join(barcode_data_path_list[i], str(digits[i]) + '.png')
    class_number_img = cv2.imread(thepath)
    plt.imshow(class_number_img)
    plt.show()



# text version
class_msg = '''
>>플라스틱 분류 번호와 정확한 이름'''

class_number = {'1' : ['pet / pete', 'polyethylene terephthalate'],
                '2' : ['hdpe', 'high-density polyethylene'],
                '3' : [],}

health_msg = '''
>>건강에 대한 위험도
숫자가 커질수록 bad
환경호르몬, 다이옥신 노출정도 높음
범위 : 1 - 6'''
health = {'3' : ['건강주의넘버: 3', '재사용시 박테리아 번식이 있습니다. 재사용 하지 마세요!'],
          '1': ['건강주의넘버: 1', '다른 플라스틱에 비해 건강에 해로움 정도가 낮습니다.'],
          '6': ['건강주의넘버: 6', '환경호르몬, 다이옥신에 대한 노출이 우려됩니다. 주의해 주세요!'],
          '2': ['건강주의넘버: 2', '다른 플라스틱에 비해 건강에 해로움 정도가 낮습니다. PET가 좀더 나은 선택입니다.']
          }

recy_msg = '''
>>재활용 가능성
숫자가 커질수록 bad
easy - manageable - difficult - very difficult - not known[0]
되도록 재활용 가능성이 높은 플라스틱 제품을 사용하는 것이 좋습니다.'''

recyclable = {'1': ['easy', '플라스틱 원료 중 가장 재활용이 용이합니다.'],
              '2': ['manageable', '그나마 재활용이 2번째로 용이한 원료 입니다. PET가 좀더 나은 선택입니다.'],
             
        }

# list
barcode_info = [class_number, health, recyclable]
info_msg = [class_msg, health_msg, recy_msg]
# string
digits = '131'
print("digits testing: ", digits)
for i in range(3):
    #print("i: ", i)
    print(info_msg[i])
    msg = barcode_info[i][digits[i]]
    print(msg)
    
    
    
    
    