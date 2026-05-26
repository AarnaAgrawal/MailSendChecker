email = input("Enter the email: ")
email = email.split()
print(email)
curseWords = ["shit", "ass"]
for i in email:
    for j in curseWords:
        if (i == j):
         print("This email contains cursewords. Are you sure you want to send this?")
