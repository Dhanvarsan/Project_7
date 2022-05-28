
# s=0
# n=4
# X=int(input())
# A=[]
# # while(n):
# #     try:
# #         line=input()
# #         line.rstrip()
# #         A.append(line)
# #     except:
# #         n=False
# for i in range(n):
#     line=int(input())
#     A.append(line)
# s=(A[0])-X
# s2=s+A[3]
# print(s2)

T=int(input())
a=int(input())
b=int(input())
k=int(input())
res=a
for i in range(1,k):
    if i%2!=0:
        res=res & b
    else:
        res=res | b
print(res)