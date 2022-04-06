class Shoe  
{   public String getName(int id)  
    {   if(id==1)  return("Shoes");
        if(id==2)  return("Girl's shoes");
        if(id==3)  return("Boots");
        return  ("Unknow");
    }
}
class Bread
{   public String getName(int id)
    {   if(id==1)  return("White");
        if(id==2)  return("Black");
        if(id==3)  return("Loaf");
        return  ("Unknow");
    }
 }

public  class Wares
{  public  static  void main(String[] args) 
   {    Shoe a;
        a=new Shoe();
       System.out.println(a.getName(1));
       System.out.println(a.getName(2));
       System.out.println(a.getName(3));
       System.out.println(a.getName(4));
       Bread b;
       b=new Bread();
       System.out.println(b.getName(1));
       System.out.println(b.getName(2));
       System.out.println(b.getName(3));
   }
}
В этой программе в классе Wares объекты Shoe и Bread хранятся в разных переменных. Интерфейс позволяет использовать для хранения объектов разных классов одну переменную.
Текст программы с интерфейсом

interface Ware
{   static final String origin="My corp";
    public String getName(int id);
}
 
class Shoe implements Ware
{    public String getName(int id) 
     {   if(id==1) return("Shoes");
         if(id==2) return("Girl's shoes");
         if(id==3) return("Boots");
         return ("Unknow");
     }
}
 
class Bread implements Ware 
{   public String getName(int id) 
    {  if(id==1) return("White");
       if(id==2) return("Black");
       if(id==3) return("Loaf");
       return ("Unknow");
    }
}
public class Proba
{  public static void main(String args[])
   {    Ware a; //Объявление переменной а типа интерфейс Ware
        a=new Shoe();
        System.out.println(a.getName(1));
        System.out.println(a.getName(2));
        System.out.println(a.getName(3));
        System.out.println(a.getName(4));
        a=new Bread();
        System.out.println(a.getName(1));
        System.out.println(a.getName(2));
        System.out.println(a.getName(3));
    }
}
