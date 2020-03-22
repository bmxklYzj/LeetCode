#
Write your MySQL query statement below
select Person.FirstName, Person.LastName, Address.City, Address.State from Person left join Address
on Person.PersonId = Address.PersonId;

select p.FirstName, p.LastName, a.City, a.State from Person p left join Address a
on p.PersonId = a.PersonId

-- 以下为测试样例
-- {
--     "headers": {
--         "Person": ["PersonId", "LastName", "FirstName"],
--         "Address": ["AddressId", "PersonId", "City", "State"]
--     },
--     "rows": {
--         "Person": [
--             [1, "Wang", "Allen"]
--         ],
--         "Address": [
--             [1, 2, "New York City", "New York"]
--         ]
--     }
-- }