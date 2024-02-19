import java.util.*;
public class EX01{

	public static void main (String[]args){
	  int pos_cnt=0, neg_cnt=0, even_cnt=0, odd_cnt=0;
	  int number ;
	  int N=1;
	  final int MAX=6;

	  Scanner sc = new Scanner(System.in);
	  while(N<=6){
	  	number=sc.nextInt();
		if(number>0){
			pos_cnt++;
			if (number%2==0) {
				even_cnt++;
			}else{
				odd_cnt++;
			}
		}else{
			neg_cnt++;
		}		
		N=N+1;
	  }
	System.out.println("pos="+pos_cnt);
	System.out.println("neg="+neg_cnt);
	System.out.println("even="+even_cnt);
	System.out.println("odd="+odd_cnt);
	}
}
