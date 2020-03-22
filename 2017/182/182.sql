# Write your MySQL query statement below
select DISTINCT Email from Person p
where
(select count(Email) from Person where Email = p.Email) > 1