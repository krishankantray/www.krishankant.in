---
date : "2022-05-10"
summary : "some commonly used design pattern"
keywords : [design-pattern]
showfullcontent : false
tags : ["system design"]
title : "Design Patterns"

---

# Design Patterns 

## Factory Method
Lets take an example of different types of cards offered by a bank. The bank offers three different types of cards say- silver, gold and platinum. Each card type has a different credit limit For Ex: credit limit of Silver card is 100,000 LKR, credit limit of gold card is 250,000 LKR and credit limit of Platinum card is 250,000 LKR.

The type of card a customer receives is dependent on his or her monthly salary. A Silver card is available to anyone with a monthly salary of less than 50,000LKR. He can receive a Gold card if his monthly income is less than 100,000LKR. He is eligible for a Platinum card if his monthly salary exceeds 100,000LKR. For EX: If your salary is 85,000LKR, then you can get a Gold card

This case is a good candidate for Factory method, so, let begin implementating the same.


**Card Type**
```java
public abstract class CardType {
    protected double CreditLimit;
    public abstract void setCreditLimit();
    @Override
    public String toString(){
        return "Your card is "+this.getClass().getSimpleName()+" & your credit limit is "+CreditLimit;
    }
}
```

**Silver Card**

```java
public class SilverCard extends CardType{
    public SilverCard() {
        setCreditLimit();
    } 
    @Override
    public void setCreditLimit() {
       CreditLimit=100000;
    }   
}
```

**Gold Card**

```java
public class GoldCard extends CardType{
    public GoldCard() {
        setCreditLimit();
    } 
    @Override
    public void setCreditLimit() {
        CreditLimit=250000;
    } 
}
```

**Platinum Card**

```java
public class PlatinumCard extends CardType{
    public PlatinumCard() {
        setCreditLimit();
    } 
    @Override
    public void setCreditLimit() {
        CreditLimit=500000;
    } 
}
```

**Factory** 

```java
public class Factory {
    
    public static CardType getcard(String type){
        switch(type){
            case "Silver": 
                return new SilverCard();
            case "Gold": 
                return new GoldCard();
            case "Platinum": 
                return new PlatinumCard();
            default : 
                return null;
        }
    }
}
```

**What is the use of factory class ?**

> This Factory method is responsible for determining which class to instantiate. This method will create and return an instance of the appropriate class based on the parameter we provide to it.


**How to use this factory class ?**

Here is the main class that uses the factory class :
```java
public class Bank {
    public static void main(String[] args) {
        String cardtype="";
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter your salary :");
        double salary=sc.nextDouble();
        
        if(salary<50000){
            cardtype="Silver";
        }else if(salary <100000){
            cardtype="Gold";
        }else{
            cardtype="Platinum";
        }
        
        CardType mycard=Factory.getcard(cardtype);
        System.out.println(mycard);
    }  
}
```  
