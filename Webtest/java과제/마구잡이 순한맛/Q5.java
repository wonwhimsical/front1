import java.util.*;
public class Q5{
    public static void main(String[]args){
        int number; int sum=0; 
        double ave=0;
        int N=1;

        Scanner sc=new Scanner(System.in);
        while(N<=5){
            number=sc.nextInt();
            sum=sum+number;
	    N=N+1;
        }
        ave= (double)sum/(N-1);
 	System.out.printf("average:"+ave);
    }
   
}