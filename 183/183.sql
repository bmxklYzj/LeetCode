# Write your MySQL query statement below
-- solution 1
SELECT Name as Customers from Customers c WHERE
c.id not in (select CustomerId from Orders)

-- soluton 1:
select c.Name as Customers from Customers c WHERE
c.id not in (select o.CustomerId from Orders o)

-- solution 2 先left join 然后判断 CustomerId 是否为空
select Name as Customers from Customers c left join Orders o on c.id = o.CustomerId
where CustomerId is null

-- solution 3
select c.Name as Customers from Customers c WHERE
c.id not in (select 1 from Orders o where c.id = o.CustomerId)