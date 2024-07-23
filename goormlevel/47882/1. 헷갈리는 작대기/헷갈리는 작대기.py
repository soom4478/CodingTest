# -*- coding: utf-8 -*-
# UTF-8 encoding when using korean
user_input = input()
text = [0]*4
for i in user_input:
	if i == '1':
		text[0] += 1
	elif i == 'I':
		text[1] += 1
	elif i == 'l':
		text[2] += 1
	elif i == '|':
		text[3] += 1
for i in text:
	print(i)