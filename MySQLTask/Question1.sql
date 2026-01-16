--A
select ename,sal from Empl where sal>=2200
--B
select * from empl where comm is null
--C
select ename,sal from empl where sal not between 2500 and 4000
--D
select ename,job,sal from empl where mgr is null
--E
select ename from empl where ename like '__a%'
--F
select ename from empl where ename like '%t'
