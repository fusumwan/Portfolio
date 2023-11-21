import React, { useRef, useMemo } from 'react';
import { useTable,usePagination  } from 'react-table';
//npm install react-table
import './CPlusPlusProjects.css'; 
import './bootstrap-scoped.css';


function CPlusPlusProjects() {
  const gridViewRef = useRef(null);
  // Sample data (replace with your actual data)
  const data = useMemo(() => [
    {
        id: '1',
        name: (
            <div>
            <p>AlternateColors</p> 
            <p>(Assignment)</p>
            <a href='https://github.com/fusumwan/CPlusPlusProject/tree/main/AlternateColors' target="_blank" rel="noopener noreferrer">download</a>
            </div>
        ),
        description: (
            <div>
            <table  className="table">
                <tr>
                <td style={{ width: '350px' }}>
                The program sorts balls of different colors by quantity and destruction order for Bob's smashing robot game, emphasizing organized logic and sorting techniques.
                </td>
                </tr>
            </table>
            </div>
        )
    }
    ,
    {
        id: '2',
        name: (
            <div>
            <p>Arrows</p> 
            <p>(Assignment)</p>
            <a href='https://github.com/fusumwan/CPlusPlusProject/tree/main/Arrows' target="_blank" rel="noopener noreferrer">download</a>
            </div>
        ),
        description: (
            <div>
            <table  className="table">
                <tr>
                <td style={{ width: '350px' }}>
                In this question, there have several kind of arrows. As the arrow is defined as a "greater/less than" character ('&gt;','&lt;') 

followed by zero or more consecutive hyphens (' - ') or equal characters ('='). 

So this program I am nesting two loops. If the string has &lt; &gt; characters in the string I have to check character whether is arrow,

the outer loop runs l times and the inner loop runs i+l times for each iteration of the outer loop,

and l equal to length of string, and i+l also equal to length of string.
                </td>
                </tr>
            </table>
            </div>
        )
    }
    ,
    {
        id: '3',
        name: (
            <div>
            <p>Ascending</p> 
            <p>(Assignment)</p>
            <a href='https://github.com/fusumwan/CPlusPlusProject/tree/main/Ascending' target="_blank" rel="noopener noreferrer">download</a>
            </div>
        ),
        description: (
            <div>
            <table  className="table">
                <tr>
                <td style={{ width: '350px' }}>
                This C++ program, titled "Ascending", calculates the minimum number of strides needed to ascend a series of stair flights. Given a list of flights (each representing the number of stairs in a flight) and the number of stairs covered per stride, it outputs the total strides needed for all flights, factoring in two additional strides for each landing between flights.
                </td>
                </tr>
            </table>
            </div>
        )
    }
    ,
    {
        id: '4',
        name: (
            <div>
            <p>AVL</p> 
            <p>(Assignment)</p>
            <a href='https://github.com/fusumwan/CPlusPlusProject/tree/main/AVL' target="_blank" rel="noopener noreferrer">download</a>
            </div>
        ),
        description: (
            <div>
            <table  className="table">
                <tr>
                <td style={{ width: '350px' }}>
                This program implements an AVL tree, a self-balancing binary search tree. It reads operations from the input, performing insertions, deletions, and traversals. Additionally, it includes functions for splitting strings, checking digit characters, and identifying positive numbers. The tree maintains balance after each operation to ensure efficient searches.
                </td>
                </tr>
            </table>
            </div>
        )
    }
    ,
    {
        id: '5',
        name: (
            <div>
            <p>AzimuthMonitoring</p> 
            <p>(Assignment)</p>
            <a href='https://github.com/fusumwan/CPlusPlusProject/tree/main/AzimuthMonitoring' target="_blank" rel="noopener noreferrer">download</a>
            </div>
        ),
        description: (
            <div>
            <table  className="table">
                <tr>
                <td style={{ width: '350px' }}>
                This program  use brute force. Because the brute force solution is simply to process each instruction for every degree and then update the degree of the result. 

This is particularly efficient because it is possible to process all instructions through brute force  algorithms.
                </td>
                </tr>
            </table>
            </div>
        )
    }
    ,
    {
        id: '6',
        name: (
            <div>
            <p>Barbecue</p> 
            <p>(Assignment)</p>
            <a href='https://github.com/fusumwan/CPlusPlusProject/tree/main/Barbecue' target="_blank" rel="noopener noreferrer">download</a>
            </div>
        ),
        description: (
            <div>
            <table  className="table">
                <tr>
                <td style={{ width: '350px' }}>
                Due to there are n members in the Smith series, 
represented by an index between 0 and n-1. 
So I just use the for loop and inital two vector lists.
Each of them can vote for any number of people (from 0 to n-1). 
So I have to save the number of against and voted for by using two vectors.
And then compare any number of voting.
                </td>
                </tr>
            </table>
            </div>
        )
    }
    ,
    {
        id: '7',
        name: (
            <div>
            <p>BigBurger</p> 
            <p>(Assignment)</p>
            <a href='https://github.com/fusumwan/CPlusPlusProject/tree/main/BigBurger' target="_blank" rel="noopener noreferrer">download</a>
            </div>
        ),
        description: (
            <div>
            <table  className="table">
                <tr>
                <td style={{ width: '350px' }}>
                The program, titled "BigBurger," calculates the maximum waiting time for customers in a queue based on their arrival and service times. It aims to determine the longest wait experienced by any customer, using a simulation approach to track each customer's waiting duration and identifying the maximum wait time encountered.




                </td>
                </tr>
            </table>
            </div>
        )
    }
    ,
    {
        id: '8',
        name: (
            <div>
            <p>BlackAndRed</p> 
            <p>(Assignment)</p>
            <a href='https://github.com/fusumwan/CPlusPlusProject/tree/main/BlackAndRed' target="_blank" rel="noopener noreferrer">download</a>
            </div>
        ),
        description: (
            <div>
            <table  className="table">
                <tr>
                <td style={{ width: '350px' }}>
                As the question given a string of representative cards, 

when my program cut, then my program should return the number of cards I should remove from the top of the deck.

"R" means red card and "B" means black card. So I have to create a variable to indicate which type is more.

And the the smallest number of red card mean the number of cards you should remove from the top of the deck
                </td>
                </tr>
            </table>
            </div>
        )
    }
    ,
    {
        id: '9',
        name: (
            <div>
            <p>BlackAndWhiteSolitaire</p> 
            <p>(Assignment)</p>
            <a href='https://github.com/fusumwan/CPlusPlusProject/tree/main/BlackAndWhiteSolitaire' target="_blank" rel="noopener noreferrer">download</a>
            </div>
        ),
        description: (
            <div>
            <table  className="table">
                <tr>
                <td style={{ width: '350px' }}>
                As a jumpy count is a positive integer, and all adjacent numbers have a difference of at least 2.

So this program use brute force. Because the brute force solution is simply to process each card font for every character and then save the number of the B and word. 

This is particularly efficient because it is possible to process all instructions through brute force  algorithms.
                </td>
                </tr>
            </table>
            </div>
        )
    }
    ,
    {
        id: '10',
        name: (
            <div>
            <p>BooksExchange</p> 
            <p>(Assignment)</p>
            <a href='https://github.com/fusumwan/CPlusPlusProject/tree/main/BooksExchange' target="_blank" rel="noopener noreferrer">download</a>
            </div>
        ),
        description: (
            <div>
            <table  className="table">
                <tr>
                <td style={{ width: '350px' }}>
                This C++ program, "BooksExchange", calculates the minimum number of exchanges required to balance two sets of books, represented by left and right vectors. It sums the quantities in each vector and determines the result based on predefined total values. The program is designed for efficiency and simplicity in managing book exchanges.
                </td>
                </tr>
            </table>
            </div>
        )
    }
    ,
    {
        id: '11',
        name: (
            <div>
            <p>CellRemoval</p> 
            <p>(Assignment)</p>
            <a href='https://github.com/fusumwan/CPlusPlusProject/tree/main/CellRemoval' target="_blank" rel="noopener noreferrer">download</a>
            </div>
        ),
        description: (
            <div>
            <table  className="table">
                <tr>
                <td style={{ width: '350px' }}>
                According to the question, everytime will start from the first cell, 

So there will be exactly one "-1" element in parentCell. 

In order to make each cell in the development of the organism either divides 

into two other cells or does not divide at all. We need to two arrays, one is for parent cell and other is for child cell.
                </td>
                </tr>
            </table>
            </div>
        )
    }
    ,
    {
        id: '12',
        name: (
            <div>
            <p>ChangingString</p> 
            <p>(Assignment)</p>
            <a href='https://github.com/fusumwan/CPlusPlusProject/tree/main/ChangingString' target="_blank" rel="noopener noreferrer">download</a>
            </div>
        ),
        description: (
            <div>
            <table  className="table">
                <tr>
                <td style={{ width: '350px' }}>
                Due to the question need to find the distance between two letters is defined as the absolute value of their difference. 

So I have to use an array to save all the distance between each character is defined as the sum of the differences between each letter and the letter in the same position. 

Hence, after saving the distance between each character then. I have to create a function to sort all the distance to find the smallest possible distance between each letter.
                </td>
                </tr>
            </table>
            </div>
        )
    }
    ,
    {
        id: '13',
        name: (
            <div>
            <p>ChickensAndCows</p> 
            <p>(Assignment)</p>
            <a href='https://github.com/fusumwan/CPlusPlusProject/tree/main/ChickensAndCows' target="_blank" rel="noopener noreferrer">download</a>
            </div>
        ),
        description: (
            <div>
            <table  className="table">
                <tr>
                <td style={{ width: '350px' }}>
                The program "ChickensAndCows" calculates the number of chickens and cows on a farm based on the total number of heads and legs. It uses an algorithm to determine the possible combinations of chickens and cows that match the given head and leg counts, returning these numbers as a vector.
                </td>
                </tr>
            </table>
            </div>
        )
    }
    ,
    {
        id: '14',
        name: (
            <div>
            <p>CircularLine</p> 
            <p>(Assignment)</p>
            <a href='https://github.com/fusumwan/CPlusPlusProject/tree/main/CircularLine' target="_blank" rel="noopener noreferrer">download</a>
            </div>
        ),
        description: (
            <div>
            <table  className="table">
                <tr>
                <td style={{ width: '350px' }}>
                This problem is definitely at most O(n^2) because you have to compare the time between each stations, 
so if I can find an O(n^2) brute force solution, 
Here I am nesting two loops. If our array has n stations, our outer loop runs n times and our inner loop runs n stations for each iteration of the outer loop, 
giving us n^2 total time comparison. Thus this function runs in O(n2) time.
If the array has 10 items, we have to compare the time between each stations 100 times. 
                </td>
                </tr>
            </table>
            </div>
        )
    }
    ,
    {
        id: '15',
        name: (
            <div>
            <p>ColorfulRabbits</p> 
            <p>(Assignment)</p>
            <a href='https://github.com/fusumwan/CPlusPlusProject/tree/main/ColorfulRabbits' target="_blank" rel="noopener noreferrer">download</a>
            </div>
        ),
        description: (
            <div>
            <table  className="table">
                <tr>
                <td style={{ width: '350px' }}>
                 First, we must consider how many rabbits there are in this town.
Therefore, if a rabbit answers only one color, the total number of rabbits should be one plus the same color (1 + 1 = 2).
On the other hand, if a rabbit's answer is two rabbits of different colors, it should be a rabbit with two different colors (1 + 2 = 3).
In the end, 2 + 3 = 5 is just 5 rabbits.
                </td>
                </tr>
            </table>
            </div>
        )
    }
    ,
    {
        id: '16',
        name: (
            <div>
            <p>CountExpressions</p> 
            <p>(Assignment)</p>
            <a href='https://github.com/fusumwan/CPlusPlusProject/tree/main/CountExpressions' target="_blank" rel="noopener noreferrer">download</a>
            </div>
        ),
        description: (
            <div>
            <table  className="table">
                <tr>
                <td style={{ width: '350px' }}>
                 As the question said that the teacher gave we two distinct numbers x and y, and asked we to use those numbers to form as many different expressions as possible. There are severals combination list below:
                </td>
                </tr>
            </table>
            </div>
        )
    }
    ,
    {
        id: '17',
        name: (
            <div>
            <p>CPlusPlusImplementationInMath</p> 
            <p>(Assignment)</p>
            <a href='https://github.com/fusumwan/CPlusPlusProject/tree/main/CPlusPlusImplementationInMath' target="_blank" rel="noopener noreferrer">download</a>
            </div>
        ),
        description: (
            <div>
            <table  className="table">
                <tr>
                <td style={{ width: '350px' }}>
                This program efficiently performs arithmetic operations, such as addition and multiplication, on large numbers using School Method and Karatsuba Algorithm, emphasizing applications in number theory and cryptography.
                </td>
                </tr>
            </table>
            </div>
        )
    }
    ,
    {
        id: '18',
        name: (
            <div>
            <p>CubeStickers</p> 
            <p>(Assignment)</p>
            <a href='https://github.com/fusumwan/CPlusPlusProject/tree/main/CubeStickers' target="_blank" rel="noopener noreferrer">download</a>
            </div>
        ),
        description: (
            <div>
            <table  className="table">
                <tr>
                <td style={{ width: '350px' }}>
                The program is designed to determine if it's possible to place stickers of different colors on each face of a cube such that adjacent faces have different colors. It involves analyzing a set of given stickers, counting their colors, and applying a rule-based logic to check if a valid arrangement exists. If a valid arrangement is possible, it returns "YES"; otherwise, it returns "NO". The program uses various C++ features, including classes, maps, vectors, and control structures, to implement the solution.
                </td>
                </tr>
            </table>
            </div>
        )
    }
    ,
    {
        id: '19',
        name: (
            <div>
            <p>DataStringHashManager</p> 
            <p>(Assignment)</p>
            <a href='https://github.com/fusumwan/CPlusPlusProject/tree/main/DataStringHashManager' target="_blank" rel="noopener noreferrer">download</a>
            </div>
        ),
        description: (
            <div>
            <table  className="table">
                <tr>
                <td style={{ width: '350px' }}>
                A versatile string processing application, DataString HashManager efficiently manages, adds, and removes data in a hash table, ensuring optimal data organization and quick retrieval. It handles complex string manipulations and offers robust hash table operations.
                </td>
                </tr>
            </table>
            </div>
        )
    }
    ,
    {
        id: '20',
        name: (
            <div>
            <p>DerivativeSequence</p> 
            <p>(Assignment)</p>
            <a href='https://github.com/fusumwan/CPlusPlusProject/tree/main/DerivativeSequence' target="_blank" rel="noopener noreferrer">download</a>
            </div>
        ),
        description: (
            <div>
            <table  className="table">
                <tr>
                <td style={{ width: '350px' }}>
                This program calculates the difference sequence from a series of elements, using nested loops for comparisons, and operates in O(s*(n-1)) time, efficiently processing sequences in C++.
                </td>
                </tr>
            </table>
            </div>
        )
    }
    ,
    {
        id: '21',
        name: (
            <div>
            <p>DifferentStrings</p> 
            <p>(Assignment)</p>
            <a href='https://github.com/fusumwan/CPlusPlusProject/tree/main/DifferentStrings' target="_blank" rel="noopener noreferrer">download</a>
            </div>
        ),
        description: (
            <div>
            <table  className="table">
                <tr>
                <td style={{ width: '350px' }}>
                Obviously, the basic string search matching problem is problematic.

Given two strings, A and B, determine if the pattern appears in the text.

The idea is straightforward because I just need to search for every position in the text,

Think of it as the starting point of the pattern and see if it matches.
                </td>
                </tr>
            </table>
            </div>
        )
    }
    ,
    {
        id: '22',
        name: (
            <div>
            <p>EggCartons</p> 
            <p>(Assignment)</p>
            <a href='https://github.com/fusumwan/CPlusPlusProject/tree/main/EggCartons' target="_blank" rel="noopener noreferrer">download</a>
            </div>
        ),
        description: (
            <div>
            <table  className="table">
                <tr>
                <td style={{ width: '350px' }}>
                According to question there are two types of egg boxes. 
One contains 6 eggs and the other contains 8 eggs. 
If we wants to buy a good egg. 
The program have to find to the minimum number of egg carts he must purchase.
This problem is definitely at most O((n/6)+(n/8)) because you have to count package of 6 or 8 eggs in box from N eggs.
so if I can find an O((n/6)+(n/8)) brute force solution. 
                </td>
                </tr>
            </table>
            </div>
        )
    }
    ,
    {
        id: '23',
        name: (
            <div>
            <p>FairWorkload</p> 
            <p>(Assignment)</p>
            <a href='https://github.com/fusumwan/CPlusPlusProject/tree/main/FairWorkload' target="_blank" rel="noopener noreferrer">download</a>
            </div>
        ),
        description: (
            <div>
            <table  className="table">
                <tr>
                <td style={{ width: '350px' }}>
                On this issue, many workers need to check many filing cabinets. 

The cabinets vary in size and we will tell you how many folders each cabinet contains. 

I have to be  asked to find a most work so that each staff member could access a series of cabinets in turn,

minimizing the maximum number of folders a staff member must browse.
                </td>
                </tr>
            </table>
            </div>
        )
    }
    ,
    {
        id: '24',
        name: (
            <div>
            <p>FancyFloor</p> 
            <p>(Assignment)</p>
            <a href='https://github.com/fusumwan/CPlusPlusProject/tree/main/FancyFloor' target="_blank" rel="noopener noreferrer">download</a>
            </div>
        ),
        description: (
            <div>
            <table  className="table">
                <tr>
                <td style={{ width: '350px' }}>
                The "FancyFloor" C++ program calculates the optimal number of boards needed to cover a given floor layout. It uses complex algorithms to analyze floor patterns and determine the most efficient arrangement of boards, considering various constraints in the layout. This utility can be vital in construction or design planning, ensuring material efficiency and cost-effectiveness.




                </td>
                </tr>
            </table>
            </div>
        )
    }
    ,
    {
        id: '25',
        name: (
            <div>
            <p>FewestFactors</p> 
            <p>(Assignment)</p>
            <a href='https://github.com/fusumwan/CPlusPlusProject/tree/main/FewestFactors' target="_blank" rel="noopener noreferrer">download</a>
            </div>
        ),
        description: (
            <div>
            <table  className="table">
                <tr>
                <td style={{ width: '350px' }}>
                I will get some decimal numbers in the int[] number. 

Build an integer with as few factors as possible, 

using each number once (make sure to calculate all factors, not just prime factors). 

If multiple factors have the same (minimum) number, the smallest one is returned.
                </td>
                </tr>
            </table>
            </div>
        )
    }
    ,
    {
        id: '26',
        name: (
            <div>
            <p>FibonacciDiv2</p> 
            <p>(Assignment)</p>
            <a href='https://github.com/fusumwan/CPlusPlusProject/tree/main/FibonacciDiv2' target="_blank" rel="noopener noreferrer">download</a>
            </div>
        ),
        description: (
            <div>
            <table  className="table">
                <tr>
                <td style={{ width: '350px' }}>
                First of all, the question is using fibonacci series to solve. 
In this program, I need to find fibonacci series in program using for and while loops. 
I need to find the series upto a specific term or a number. 
And then I can increment the Fibonacci number every time in order to find the 
                </td>
                </tr>
            </table>
            </div>
        )
    }
    ,
    {
        id: '27',
        name: (
            <div>
            <p>FracCount</p> 
            <p>(Assignment)</p>
            <a href='https://github.com/fusumwan/CPlusPlusProject/tree/main/FracCount' target="_blank" rel="noopener noreferrer">download</a>
            </div>
        ),
        description: (
            <div>
            <table  className="table">
                <tr>
                <td style={{ width: '350px' }}>
                The program assigns unique values to irreducible fractions between 0 and 1, identifying prime numbers using modulus operators to validate divisibility, thereby determining the position of each fraction.
                </td>
                </tr>
            </table>
            </div>
        )
    }
    ,
    {
        id: '28',
        name: (
            <div>
            <p>GoBackNReliableTransmitter</p> 
            <p>(Assignment)</p>
            <a href='https://github.com/fusumwan/CPlusPlusProject/tree/main/GoBackNReliableTransmitter' target="_blank" rel="noopener noreferrer">download</a>
            </div>
        ),
        description: (
            <div>
            <table  className="table">
                <tr>
                <td style={{ width: '350px' }}>
                This program implements the Go-Back-N ARQ protocol, ensuring reliable data transfer over networks with packet ordering, corruption handling, and loss recovery capabilities. It optimizes network communication efficiency.
                </td>
                </tr>
            </table>
            </div>
        )
    }
    ,
    {
        id: '29',
        name: (
            <div>
            <p>GoodHours</p> 
            <p>(Assignment)</p>
            <a href='https://github.com/fusumwan/CPlusPlusProject/tree/main/GoodHours' target="_blank" rel="noopener noreferrer">download</a>
            </div>
        ),
        description: (
            <div>
            <table  className="table">
                <tr>
                <td style={{ width: '350px' }}>
                This program identifies "good" hours in a time range based on unique mathematical relationships between hour and minute digits, demonstrating skills in class-based design, arithmetic operations, and time manipulation in C++.
                </td>
                </tr>
            </table>
            </div>
        )
    }
    ,
    {
        id: '30',
        name: (
            <div>
            <p>HenrysKey</p> 
            <p>(Assignment)</p>
            <a href='https://github.com/fusumwan/CPlusPlusProject/tree/main/HenrysKey' target="_blank" rel="noopener noreferrer">download</a>
            </div>
        ),
        description: (
            <div>
            <table  className="table">
                <tr>
                <td style={{ width: '350px' }}>
                HenrysKey is a C++ program designed to calculate factorials of integers and count unique consecutive characters in strings, showcasing iteration, string manipulation, and mathematical computations.
                </td>
                </tr>
            </table>
            </div>
        )
    }
    ,
    {
        id: '31',
        name: (
            <div>
            <p>HouseBuilding</p> 
            <p>(Assignment)</p>
            <a href='https://github.com/fusumwan/CPlusPlusProject/tree/main/HouseBuilding' target="_blank" rel="noopener noreferrer">download</a>
            </div>
        ),
        description: (
            <div>
            <table  className="table">
                <tr>
                <td style={{ width: '350px' }}>
                The program processes a string array representing area heights, converting elements to integers and optimizing terrain leveling with minimal effort, showcasing data manipulation and computational efficiency.
                </td>
                </tr>
            </table>
            </div>
        )
    }
    ,
    {
        id: '32',
        name: (
            <div>
            <p>Inchworm</p> 
            <p>(Assignment)</p>
            <a href='https://github.com/fusumwan/CPlusPlusProject/tree/main/Inchworm' target="_blank" rel="noopener noreferrer">download</a>
            </div>
        ),
        description: (
            <div>
            <table  className="table">
                <tr>
                <td style={{ width: '350px' }}>
                This question is to find the greatest common divisor of the distribution of rest and leaf,  
which are not all zero, is the largest positive integer that divides each of the integers. 
                </td>
                </tr>
            </table>
            </div>
        )
    }
    ,
    {
        id: '33',
        name: (
            <div>
            <p>JackClassGenHackVMCode</p> 
            <p>(Assignment)</p>
            <a href='https://github.com/fusumwan/CPlusPlusProject/tree/main/JackClassGenHackVMCode' target="_blank" rel="noopener noreferrer">download</a>
            </div>
        ),
        description: (
            <div>
            <table  className="table">
                <tr>
                <td style={{ width: '350px' }}>
                The program processes a Jack class's abstract syntax tree (AST) to generate Hack Virtual Machine Code, translating high-level OOP language into lower-level language by methodically interpreting AST nodes.
                </td>
                </tr>
            </table>
            </div>
        )
    }
    ,
    {
        id: '34',
        name: (
            <div>
            <p>JumpyNum</p> 
            <p>(Assignment)</p>
            <a href='https://github.com/fusumwan/CPlusPlusProject/tree/main/JumpyNum' target="_blank" rel="noopener noreferrer">download</a>
            </div>
        ),
        description: (
            <div>
            <table  className="table">
                <tr>
                <td style={{ width: '350px' }}>
                Since the problem mentioned is that the hop count is a positive integer, we must ensure that the hop count should be a positive number. And since all one digits are beating, there are 0 to 9 digits. Then, depending on the problem, the difference between all adjacent numbers is at least 2. Therefore, I have to use a recursive function to check the difference between all adjacent numbers.
                </td>
                </tr>
            </table>
            </div>
        )
    }
    ,
    {
        id: '35',
        name: (
            <div>
            <p>LostParentheses</p> 
            <p>(Assignment)</p>
            <a href='https://github.com/fusumwan/CPlusPlusProject/tree/main/LostParentheses' target="_blank" rel="noopener noreferrer">download</a>
            </div>
        ),
        description: (
            <div>
            <table  className="table">
                <tr>
                <td style={{ width: '350px' }}>
                As the question given a String e containing an expression without parentheses. 

First of all, sum up all the non-negatives value  and then sum up all negatives value.

Then I will find out the the minimum value the original expression might have before removing the parentheses.
                </td>
                </tr>
            </table>
            </div>
        )
    }
    ,
    {
        id: '36',
        name: (
            <div>
            <p>LotteryTicket</p> 
            <p>(Assignment)</p>
            <a href='https://github.com/fusumwan/CPlusPlusProject/tree/main/LotteryTicket' target="_blank" rel="noopener noreferrer">download</a>
            </div>
        ),
        description: (
            <div>
            <table  className="table">
                <tr>
                <td style={{ width: '350px' }}>
                According to the question. Nick has exactly four banknotes with values b1, b2, b3 and b4. 
Some of the values may be equal.
Hence, we need to find out all probability  of the combination of values b1 to b4.
Therefore, first of all, I have to make a vector to save all the values, 
and then find out the sum of all combination.
So this method can help me to find out all the possible to buy a single lotto ticket without getting any change back.
                </td>
                </tr>
            </table>
            </div>
        )
    }
    ,
    {
        id: '37',
        name: (
            <div>
            <p>MagicSpell</p> 
            <p>(Assignment)</p>
            <a href='https://github.com/fusumwan/CPlusPlusProject/tree/main/MagicSpell' target="_blank" rel="noopener noreferrer">download</a>
            </div>
        ),
        description: (
            <div>
            <table  className="table">
                <tr>
                <td style={{ width: '350px' }}>
                In order to decrypt the spell, I need to swap all the letters 'A' and 'Z'.

So I have to find A and Z in both the begin of string and end of string

and then I have to reverse their order. 
                </td>
                </tr>
            </table>
            </div>
        )
    }
    ,
    {
        id: '38',
        name: (
            <div>
            <p>MinimalDifference</p> 
            <p>(Assignment)</p>
            <a href='https://github.com/fusumwan/CPlusPlusProject/tree/main/MinimalDifference' target="_blank" rel="noopener noreferrer">download</a>
            </div>
        ),
        description: (
            <div>
            <table  className="table">
                <tr>
                <td style={{ width: '350px' }}>
                According to the question given three integers A, B and C. 
And Return the integer X between A and B,
And I also need to find the digit sum of X and the digit sum of C. 
So first of all, I have to create total function to find out the digit sum of X and the digit sum of C;
And then I need to use a loop to the difference between  the digit sum of X and the digit sum of C;
Hence, I can find out the smallest among A and B.
                </td>
                </tr>
            </table>
            </div>
        )
    }
    ,
    {
        id: '39',
        name: (
            <div>
            <p>MooingCows</p> 
            <p>(Assignment)</p>
            <a href='https://github.com/fusumwan/CPlusPlusProject/tree/main/MooingCows' target="_blank" rel="noopener noreferrer">download</a>
            </div>
        ),
        description: (
            <div>
            <table  className="table">
                <tr>
                <td style={{ width: '350px' }}>
                This problem is definitely at most O(n^4) because you have to check each position in Byterland, 
And then I am nesting two loops to find the dissatisfaction of a cow at (i,j) is equal to the square of the distance between them: ((x-i)2 + (y-j)2). 
And then to find the total dissatisfaction is the sum of the dissatisfaction of all the cows.
                </td>
                </tr>
            </table>
            </div>
        )
    }
    ,
    {
        id: '40',
        name: (
            <div>
            <p>Multiples</p> 
            <p>(Assignment)</p>
            <a href='https://github.com/fusumwan/CPlusPlusProject/tree/main/Multiples' target="_blank" rel="noopener noreferrer">download</a>
            </div>
        ),
        description: (
            <div>
            <table  className="table">
                <tr>
                <td style={{ width: '350px' }}>
                Due to the question given a range of integers from min to max,

Given a range of integers from min to max (inclusive), It is determined that the number within the range can be divisible by the factor.

So I try to use recursive, modulo operator and dynamic programming to solve that problem. All the result will save in the tree.
                </td>
                </tr>
            </table>
            </div>
        )
    }
    ,
    {
        id: '41',
        name: (
            <div>
            <p>NumberSplit</p> 
            <p>(Assignment)</p>
            <a href='https://github.com/fusumwan/CPlusPlusProject/tree/main/NumberSplit' target="_blank" rel="noopener noreferrer">download</a>
            </div>
        ),
        description: (
            <div>
            <table  className="table">
                <tr>
                <td style={{ width: '350px' }}>
                As the question mention that The decimal representation of a given number is first divided into several (at least two) parts, 
which are then multiplied to obtain a possible successor. 

For the selected successor, 
we repeat this process to get the third number, and so on, 
until we reach a single digit.
So it just use a recursive function to cater this situation.
                </td>
                </tr>
            </table>
            </div>
        )
    }
    ,
    {
        id: '42',
        name: (
            <div>
            <p>PartySeats</p> 
            <p>(Assignment)</p>
            <a href='https://github.com/fusumwan/CPlusPlusProject/tree/main/PartySeats' target="_blank" rel="noopener noreferrer">download</a>
            </div>
        ),
        description: (
            <div>
            <table  className="table">
                <tr>
                <td style={{ width: '350px' }}>
                "PartySeats" organizes a balanced, gender-alternating seating arrangement for a party in C++, using queues and lexicographical sorting, and addresses constraints to ensure equitable distribution or return an empty list if infeasible.
                </td>
                </tr>
            </table>
            </div>
        )
    }
    ,
    {
        id: '43',
        name: (
            <div>
            <p>PaternityTest</p> 
            <p>(Assignment)</p>
            <a href='https://github.com/fusumwan/CPlusPlusProject/tree/main/PaternityTest' target="_blank" rel="noopener noreferrer">download</a>
            </div>
        ),
        description: (
            <div>
            <table  className="table">
                <tr>
                <td style={{ width: '350px' }}>
                PaternityTest is a C++ application using advanced structures and dynamic programming to identify potential paternity candidates by comparing genetic markers, showcasing genetic pattern matching and optimization in problem-solving.
                </td>
                </tr>
            </table>
            </div>
        )
    }
    ,
    {
        id: '44',
        name: (
            <div>
            <p>ProblemsToSolve</p> 
            <p>(Assignment)</p>
            <a href='https://github.com/fusumwan/CPlusPlusProject/tree/main/ProblemsToSolve' target="_blank" rel="noopener noreferrer">download</a>
            </div>
        ),
        description: (
            <div>
            <table  className="table">
                <tr>
                <td style={{ width: '350px' }}>
                This problem is definitely at most O(n^2) because the question request me must first solve problem 0,

After solving each problem i, I must either move on to problem i+1 or skip ahead to problem i+2. 

Hence, I am nesting two loops to find the check the number of next problem. 

As I are not allow to skip more than one problem. So the result should equal to (the number of problem - the current index) / 2

And then check it whether is vaild or not.
                </td>
                </tr>
            </table>
            </div>
        )
    }
    ,
    {
        id: '45',
        name: (
            <div>
            <p>project_description - Copy.csv</p> 
            <p>(Assignment)</p>
            <a href='https://github.com/fusumwan/CPlusPlusProject/tree/main/project_description - Copy.csv' target="_blank" rel="noopener noreferrer">download</a>
            </div>
        ),
        description: (
            <div>
            <table  className="table">
                <tr>
                <td style={{ width: '350px' }}>
                Project Description not found.
                </td>
                </tr>
            </table>
            </div>
        )
    }
    ,
    {
        id: '46',
        name: (
            <div>
            <p>project_description.csv</p> 
            <p>(Assignment)</p>
            <a href='https://github.com/fusumwan/CPlusPlusProject/tree/main/project_description.csv' target="_blank" rel="noopener noreferrer">download</a>
            </div>
        ),
        description: (
            <div>
            <table  className="table">
                <tr>
                <td style={{ width: '350px' }}>
                Project Description not found.
                </td>
                </tr>
            </table>
            </div>
        )
    }
    ,
    {
        id: '47',
        name: (
            <div>
            <p>project_description2.csv</p> 
            <p>(Assignment)</p>
            <a href='https://github.com/fusumwan/CPlusPlusProject/tree/main/project_description2.csv' target="_blank" rel="noopener noreferrer">download</a>
            </div>
        ),
        description: (
            <div>
            <table  className="table">
                <tr>
                <td style={{ width: '350px' }}>
                Project Description not found.
                </td>
                </tr>
            </table>
            </div>
        )
    }
    ,
    {
        id: '48',
        name: (
            <div>
            <p>Reppity</p> 
            <p>(Assignment)</p>
            <a href='https://github.com/fusumwan/CPlusPlusProject/tree/main/Reppity' target="_blank" rel="noopener noreferrer">download</a>
            </div>
        ),
        description: (
            <div>
            <table  className="table">
                <tr>
                <td style={{ width: '350px' }}>
                Reppity finds the longest repeating substring in a string using C++, featuring classes and dynamic programming for efficient algorithmic problem-solving.
                </td>
                </tr>
            </table>
            </div>
        )
    }
    ,
    {
        id: '49',
        name: (
            <div>
            <p>RockStar</p> 
            <p>(Assignment)</p>
            <a href='https://github.com/fusumwan/CPlusPlusProject/tree/main/RockStar' target="_blank" rel="noopener noreferrer">download</a>
            </div>
        ),
        description: (
            <div>
            <table  className="table">
                <tr>
                <td style={{ width: '350px' }}>
                Apparently, theres also a mathematical solution. I should probably look for math solutions.
So if fs not zero and more than sf then the result must be ss  + ff + 2*sf + 1&gt; 
However the result must be ss + ff + 2*fs.
                </td>
                </tr>
            </table>
            </div>
        )
    }
    ,
    {
        id: '50',
        name: (
            <div>
            <p>RugSizes</p> 
            <p>(Assignment)</p>
            <a href='https://github.com/fusumwan/CPlusPlusProject/tree/main/RugSizes' target="_blank" rel="noopener noreferrer">download</a>
            </div>
        ),
        description: (
            <div>
            <table  className="table">
                <tr>
                <td style={{ width: '350px' }}>
                Due to carpets can come in a variety of sizes. So, we can simply use brute force solution to calculate 
carpets of any integer width and length, except that the width and length of the carpet are uniform. 
So we can count how many different options are available in a given area.
                </td>
                </tr>
            </table>
            </div>
        )
    }
    ,
    {
        id: '51',
        name: (
            <div>
            <p>RunLengthEncoding</p> 
            <p>(Assignment)</p>
            <a href='https://github.com/fusumwan/CPlusPlusProject/tree/main/RunLengthEncoding' target="_blank" rel="noopener noreferrer">download</a>
            </div>
        ),
        description: (
            <div>
            <table  className="table">
                <tr>
                <td style={{ width: '350px' }}>
                Due to the question request a decode coding function which is a simple compression technique that compresses a string of letters by 
replacing repeated consecutive letters  with the number of occurrences of the letter, 
followed by the letter. So I you the dynamic programming to decode the string.
                </td>
                </tr>
            </table>
            </div>
        )
    }
    ,
    {
        id: '52',
        name: (
            <div>
            <p>SimpleCompressor</p> 
            <p>(Assignment)</p>
            <a href='https://github.com/fusumwan/CPlusPlusProject/tree/main/SimpleCompressor' target="_blank" rel="noopener noreferrer">download</a>
            </div>
        ),
        description: (
            <div>
            <table  className="table">
                <tr>
                <td style={{ width: '350px' }}>
                The program abbreviates strings by encoding repeated patterns, employing a 'StrControl' class to identify and compress sequences, exemplifying string manipulation and data encoding techniques.
                </td>
                </tr>
            </table>
            </div>
        )
    }
    ,
    {
        id: '53',
        name: (
            <div>
            <p>SimpleDuplicateRemover</p> 
            <p>(Assignment)</p>
            <a href='https://github.com/fusumwan/CPlusPlusProject/tree/main/SimpleDuplicateRemover' target="_blank" rel="noopener noreferrer">download</a>
            </div>
        ),
        description: (
            <div>
            <table  className="table">
                <tr>
                <td style={{ width: '350px' }}>
                Due to the question given a int[] sequence. And asking me to find out the duplicate elements first.

so I use tree programm to cater each elements, 

every time if the element add into the tree to be a node will be checked whether appears mulitple times.

and then each node will save the result.
                </td>
                </tr>
            </table>
            </div>
        )
    }
    ,
    {
        id: '54',
        name: (
            <div>
            <p>Slowkeyboard</p> 
            <p>(Assignment)</p>
            <a href='https://github.com/fusumwan/CPlusPlusProject/tree/main/Slowkeyboard' target="_blank" rel="noopener noreferrer">download</a>
            </div>
        ),
        description: (
            <div>
            <table  className="table">
                <tr>
                <td style={{ width: '350px' }}>
                "Slowkeyboard" is a C++ program designed to calculate the remaining seconds in a minute from a given time string, showcasing basic string processing and vector manipulation skills.
                </td>
                </tr>
            </table>
            </div>
        )
    }
    ,
    {
        id: '55',
        name: (
            <div>
            <p>SortingBoxes</p> 
            <p>(Assignment)</p>
            <a href='https://github.com/fusumwan/CPlusPlusProject/tree/main/SortingBoxes' target="_blank" rel="noopener noreferrer">download</a>
            </div>
        ),
        description: (
            <div>
            <table  className="table">
                <tr>
                <td style={{ width: '350px' }}>
                The program's aim is to minimize operations in sorting colored boxes, using a custom algorithm to efficiently manage and redistribute items among different colored containers.
                </td>
                </tr>
            </table>
            </div>
        )
    }
    ,
    {
        id: '56',
        name: (
            <div>
            <p>SquareOfDigits</p> 
            <p>(Assignment)</p>
            <a href='https://github.com/fusumwan/CPlusPlusProject/tree/main/SquareOfDigits' target="_blank" rel="noopener noreferrer">download</a>
            </div>
        ),
        description: (
            <div>
            <table  className="table">
                <tr>
                <td style={{ width: '350px' }}>
                After reading the problem, I can not imagine the implementation at all, and my head is becoming white.

Look for the same number pair on the same line. If I find a pair of numbers in a row, I should check if there is the same number in the same position in the following row.

At this point, instead of searching for a square, the idea has been switched to searching for an arbitrary rectangle with the same numerical value of the corners.
                </td>
                </tr>
            </table>
            </div>
        )
    }
    ,
    {
        id: '57',
        name: (
            <div>
            <p>StrangeComputer</p> 
            <p>(Assignment)</p>
            <a href='https://github.com/fusumwan/CPlusPlusProject/tree/main/StrangeComputer' target="_blank" rel="noopener noreferrer">download</a>
            </div>
        ),
        description: (
            <div>
            <table  className="table">
                <tr>
                <td style={{ width: '350px' }}>
                This problem is definitely at most O(n) because you have to check each bit in the string,
so if I can find an O(n) brute force solution, I can iterate through the string array and check if the character equal to '0' and then set to '1' and then check if character equal to '0'.
Repeating the action. I will find the number of operation.
                </td>
                </tr>
            </table>
            </div>
        )
    }
    ,
    {
        id: '58',
        name: (
            <div>
            <p>StreetParking</p> 
            <p>(Assignment)</p>
            <a href='https://github.com/fusumwan/CPlusPlusProject/tree/main/StreetParking' target="_blank" rel="noopener noreferrer">download</a>
            </div>
        ),
        description: (
            <div>
            <table  className="table">
                <tr>
                <td style={{ width: '350px' }}>
                In this program I am nesting two loops. If the string has n characters in the street name, 
the outer loop runs n times and the inner loop runs n times for each iteration of the outer loop, 
giving us n²?? total comparsion with private driveway, bus stop, and side-street. 
Thus this function runs in O(n²) time. If the array has 10 characters, I have to compare strings more than 100 times. 
                </td>
                </tr>
            </table>
            </div>
        )
    }
    ,
    {
        id: '59',
        name: (
            <div>
            <p>TalentComp</p> 
            <p>(Assignment)</p>
            <a href='https://github.com/fusumwan/CPlusPlusProject/tree/main/TalentComp' target="_blank" rel="noopener noreferrer">download</a>
            </div>
        ),
        description: (
            <div>
            <table  className="table">
                <tr>
                <td style={{ width: '350px' }}>
                The program aims to solve a talent competition problem, evaluating candidates based on talent and skill criteria, determining the number of successful candidates through a custom algorithm.
                </td>
                </tr>
            </table>
            </div>
        )
    }
    ,
    {
        id: '60',
        name: (
            <div>
            <p>Thimbles</p> 
            <p>(Assignment)</p>
            <a href='https://github.com/fusumwan/CPlusPlusProject/tree/main/Thimbles' target="_blank" rel="noopener noreferrer">download</a>
            </div>
        ),
        description: (
            <div>
            <table  className="table">
                <tr>
                <td style={{ width: '350px' }}>
                As the dealer placed three identical thimebles on the table, so I thought this program I need nesting two loops. 
If the vector has three string in the vector &lt;string&gt;
the outer loop runs n times and the inner loop runs n times for each iteration of the outer loop, 
giving us n²?? total comparsion with position.
Thus this function runs in O(n²) time. If the array has 100 string, I have to compare strings more than 100 times. 
                </td>
                </tr>
            </table>
            </div>
        )
    }
    ,
    {
        id: '61',
        name: (
            <div>
            <p>ThrowTheBall</p> 
            <p>(Assignment)</p>
            <a href='https://github.com/fusumwan/CPlusPlusProject/tree/main/ThrowTheBall' target="_blank" rel="noopener noreferrer">download</a>
            </div>
        ),
        description: (
            <div>
            <table  className="table">
                <tr>
                <td style={{ width: '350px' }}>
                This problem is definitely at most O(n) because you have to check each element in the N friends setting in a circle, 
so if I can find an O(n) brute force solution, 
Im set. It is pretty easy to tell when the game starts (could be anywhere) and the players take turns passing the ball to each other until one of player has alreadly received the ball M times, then the game is over. 
If I iterate through the integer array and check if the number of receiving ball condition is larger than M time.
then I can increment the passing count value.
                </td>
                </tr>
            </table>
            </div>
        )
    }
    ,
    {
        id: '62',
        name: (
            <div>
            <p>TimeTravellingCellar</p> 
            <p>(Assignment)</p>
            <a href='https://github.com/fusumwan/CPlusPlusProject/tree/main/TimeTravellingCellar' target="_blank" rel="noopener noreferrer">download</a>
            </div>
        ),
        description: (
            <div>
            <table  className="table">
                <tr>
                <td style={{ width: '350px' }}>
                According to the question I have two array, profit and decay. 

When I push the time into the cellar, I get Gogo's profit[i]. 

So this problem is definitely at most O(n^2) because you have to calculate each profit when you push the time into the cellar.

Shorten the time of the wine cellar, I will lose his profit. 

By pushing time in one cellar and turning time back to another cellar,

I get the maximum profit Gogo can get.
                </td>
                </tr>
            </table>
            </div>
        )
    }
    ,
    {
        id: '63',
        name: (
            <div>
            <p>Truckloads</p> 
            <p>(Assignment)</p>
            <a href='https://github.com/fusumwan/CPlusPlusProject/tree/main/Truckloads' target="_blank" rel="noopener noreferrer">download</a>
            </div>
        ),
        description: (
            <div>
            <table  className="table">
                <tr>
                <td style={{ width: '350px' }}>
                This problem is definitely to be solved by recursive function because you have to divide the pile in half forming two smaller piles in order to continue dividing each of the small piles in half until we get piles that will fit on a truck.So we need a function that calls itself during its to division. This enables the function to repeat itself several times, outputting the result and the end of each iteration. 
                </td>
                </tr>
            </table>
            </div>
        )
    }
    ,
    {
        id: '64',
        name: (
            <div>
            <p>UniClassScheduler</p> 
            <p>(Assignment)</p>
            <a href='https://github.com/fusumwan/CPlusPlusProject/tree/main/UniClassScheduler' target="_blank" rel="noopener noreferrer">download</a>
            </div>
        ),
        description: (
            <div>
            <table  className="table">
                <tr>
                <td style={{ width: '350px' }}>
                UniClass Scheduler is designed to efficiently solve university class scheduling challenges using greedy algorithms and OOP. It incrementally constructs optimal timetables while managing constraints and lecturer preferences, ensuring feasible and efficient scheduling solutions.
                </td>
                </tr>
            </table>
            </div>
        )
    }
    ,
    {
        id: '65',
        name: (
            <div>
            <p>UnsealTheSafe</p> 
            <p>(Assignment)</p>
            <a href='https://github.com/fusumwan/CPlusPlusProject/tree/main/UnsealTheSafe' target="_blank" rel="noopener noreferrer">download</a>
            </div>
        ),
        description: (
            <div>
            <table  className="table">
                <tr>
                <td style={{ width: '350px' }}>
                The program aims to solve a keypad-based password generation problem,calculating the number of possible passwords of a given length where each digit is adjacent to the previous one on the keypad.
                </td>
                </tr>
            </table>
            </div>
        )
    }
    ,
    {
        id: '66',
        name: (
            <div>
            <p>WordGame</p> 
            <p>(Assignment)</p>
            <a href='https://github.com/fusumwan/CPlusPlusProject/tree/main/WordGame' target="_blank" rel="noopener noreferrer">download</a>
            </div>
        ),
        description: (
            <div>
            <table  className="table">
                <tr>
                <td style={{ width: '350px' }}>
                The program is designed to demonstrate various C++ features through a word game, focusing on string processing, dynamic programming with Fibonacci sequences, and data structure usage.
                </td>
                </tr>
            </table>
            </div>
        )
    }
    ], []);

  // Define columns with custom render functions
  const columns = useMemo(() => [
    {
      Header: 'ID',
      accessor: 'id',
    },
    {
      Header: 'Name',
      accessor: 'name',
    },
    {
      Header: 'Description',
      accessor: 'description',
    }
  ], []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page, // Instead of using 'rows', we use page
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    { columns, data, initialState: { pageIndex: 0, pageSize: 1 } }, // Set initial page size
    usePagination
  );

  return (
    <div className="samples-container"> {/* New container div */}
      <section className="react-samples">
        <div className="gridview-container">
          <table ref={gridViewRef} {...getTableProps()} className="table" style={{ width: '100%' }}>
            <thead>
              {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map(column => (
                    <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {page.map(row => { // Use 'page' instead of 'rows'
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map(cell => {
                      return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
          {/* Pagination */}
          <div className="pagination">
            <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
              {'<<'}
            </button>{' '}
            <button onClick={() => previousPage()} disabled={!canPreviousPage}>
              {'<'}
            </button>{' '}
            <button onClick={() => nextPage()} disabled={!canNextPage}>
              {'>'}
            </button>{' '}
            <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
              {'>>'}
            </button>{' '}
            <span>
              Page{' '}
              <strong>
                {pageIndex + 1} of {pageOptions.length}
              </strong>{' '}
            </span>
            <select
              value={pageSize}
              onChange={e => {
                setPageSize(Number(e.target.value));
              }}
            >
              {[1,2].map(pageSize => (
                <option key={pageSize} value={pageSize}>
                  Show {pageSize}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CPlusPlusProjects;
  