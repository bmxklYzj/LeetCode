# Write your MySQL query statement below
SELECT Name as Employee from Employee ea
WHERE ea.Salary > (select Salary from Employee eb WHERE ea.ManagerId = eb.Id)