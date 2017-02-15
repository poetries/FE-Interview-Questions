**栈和队列的区别?**

- 栈的插入和删除操作都是在一端进行的，而队列的操作却是在两端进行的。

- 队列先进先出，栈先进后出。

- 栈只允许在表尾一端进行插入和删除，而队列只允许在表尾一端进行插入，在表头一端进行删除

**栈和堆的区别？**

- 栈区（stack）—   由编译器自动分配释放   ，存放函数的参数值，局部变量的值等。

- 堆区（heap）   —   一般由程序员分配释放，   若程序员不释放，程序结束时可能由OS回收。

- 堆（数据结构）：堆可以被看成是一棵树，如：堆排序；

- 栈（数据结构）：一种先进后出的数据结构

**快速 排序的思想并实现一个快排？**

"快速排序"的思想很简单，整个排序过程只需要三步：

- （1）在数据集之中，找一个基准点

- （2）建立两个数组，分别存储左边和右边的数组

- （3）利用递归进行下次比较

```
 <script type="text/javascript">

        function quickSort(arr){
            if(arr.length<=1){
                return arr;//如果数组只有一个数，就直接返回；
            }

            var num = Math.floor(arr.length/2);//找到中间数的索引值，如果是浮点数，则向下取整

            var numValue = arr.splice(num,1);//找到中间数的值
            var left = [];
            var right = [];

            for(var i=0;i<arr.length;i++){
                if(arr[i]<numValue){
                    left.push(arr[i]);//基准点的左边的数传到左边数组
                }
                else{
                   right.push(arr[i]);//基准点的右边的数传到右边数组
                }
            }

            return quickSort(left).concat([numValue],quickSort(right));//递归不断重复比较
        }

        alert(quickSort([32,45,37,16,2,87]));//弹出“2,16,32,37,45,87”

    </script>
```
