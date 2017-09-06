# description

写sql语句，找第二大的数

# solution

1. wa,因为空集要求返回null， 我的是空数组

```sql
select SecondHighestSalary from Employee
where Salary < (select max(Salary) from Employee)
order by Salary desc
limit 1
```

2. 看题解解决

# conclusion

