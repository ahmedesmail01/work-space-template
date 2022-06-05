#define _CRT_SECURE_NO_WARNINGS
#define _CRT_NONSTDC_NO_WARNINGS

#include<stdio.h>
#include<string.h>

int main(){
    int num1 = 0, num2 = 0;

    printf("enter num1: \n");
    scanf("%d", &num1);
    printf("enter num2: \n");
    scanf("%d", &num2);

    int xch = num1;
    num1 = 0 + num2;
    num2 = xch;

    printf("after swapping : \n num1 = %d \n num2 = %d", num1 , num2);
}

