//
// function isSame(arr1, arr2) {
//     if(arr1.length !== arr2.length) return false
//     for(let i = 0; i < arr1.length; i++) {
//         console.log(arr1[i])
//         let index = arr2.indexOf(arr1)
//         if(index === -1) {
//             return false
//         }else {
//             arr2.splice(index, 1)
//         }
//     }
//     return true
// }
// console.log(isSame([1, 2, 4, 5], [1, 4, 5, 2]))


//
// function isSame(arr1, arr2) {
//     const hashTabel1 = {}
//     const hashTabel2 = {}

//     for(let num of arr1) {
//         hashTabel1[num] = (hashTabel1[num] || 0) + 1
//     }

//     for(let num of arr2) {
//         hashTabel2[num] = (hashTabel2[num] || 0) + 1
//     }

//     for(let elm in hashTabel1) {
//         if(!elm in hashTabel2 || hashTabel1[elm] !== hashTabel2[elm]) {
//             return false
//         }
//     }

//     console.log(hashTabel1)
//     console.log(hashTabel2)
//     return true
// }
// console.log(isSame([1, 2, 4, 5], [1, 4, 5, 2]))


//
// function sortArr(arr) {

// }
// sortArr([3, 1, 5, 4, 9, 8, 7, 6])



//
// function selectionSort(arr) {
//     for(let i = 0; i < arr.length; i++) {
//         let lowest = i
//         for(let j = i + 1; j < arr.length; j++) {
//             // console.log(arr[j])
//             if(arr[j] < arr[lowest]) {
//                 lowest = j
//             }
//         }

//         if(i !== lowest) {
//             let temp = arr[i]
//             arr[i] = arr[lowest]
//             arr[lowest] = temp
//         }
//     }
//     return arr
// }
// console.log(selectionSort([1, 5, 2, 9, 6, 10, 8]))


// Sorting
// function sortArr(arr) {
//     arr.sort(function(a, b) {
//         const nameA = a.toLowerCase()
//         const nameB = b.toLowerCase()
//         if(nameA < nameB) {
//             return -1
//         } else if(nameA > nameB) {
//             return 1
//         }else {
//             return 0
//         }
//     })
//     console.log(arr)
// }
// console.log(sortArr(["Banana", "Orange", "Apple", "Mango"]))


// primitive sort or quadratic sort
//Bubble sort
//Selection sort(time-consuming)
//Insertion sort

// More efficient sort
//merge sort(efficient)
//quick sort


//Bubble sort
//Move the largest element to the last

//Swap function
// function swapVal(arr, idx1, idx2) {
//     [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
// }

// Sorting Function
// function bubbleSort(arr) {
//     for(let i = 0; i < arr.length; i++) {
//         let swap = false
//         for(let j = 0; j < arr.length - i - 1; j++) {
//             console.log(arr, arr[j], arr[j+1])

//             if(arr[j] > arr[j + 1]) {
//                 swapVal(arr, j, j + 1)
//                 //swap
//                 // let temp = arr[j]
//                 // arr[j] = arr[j + 1]
//                 // arr[j + 1] = temp
//                 swap = true
//             }
//         }
//         if(!swap) break
//     }
//     return arr
// }
// console.log(bubbleSort([]))


//Selection sort
//smallest element will move to the left(priority)

// function selectionSort(arr) {

// }
// console.log(selectionSort([1, 10, 2, 20, 6, 30, 9]))



//Linked List (singly linked list and Doubly linked list)
// class Person{
//     constructor(leg, arm) {
//         this.leg = leg
//         this.arm = arm
//     }

//     walk() {
//         console.log("is walking...")
//     }

// }

// const himu = new Person(2, 2)
// console.log(himu)


// LinkedList
// class Node{
//     constructor(value) {
//         this.value = value
//         this.next = null
//     }
// }

// class LinkedList{
//     constructor(value) {
//         const newNode = new Node(value)
//         this.head = newNode
//         this.tail = newNode
//         this.length = 1
//     }
//     //Adding Node at the end of Linked List
//     push(value) {
//         const newNode = new Node(value)
//         if(!this.head) {
//             this.head = newNode
//             this.tail = newNode
//         }else {
//             this.tail.next = newNode
//             this.tail = newNode 
//         }
//         this.length++
//     }

//     unshift(value) {
//         const newNode = new Node(value)
//         if(!this.head) {
//             this.head = newNode
//             this.tail = newNode
//         }else {
//             newNode.next = this.head   // Adding 1st new newNode next at upon head
//             this.head = newNode        // After adding head set to it newNode
//         }
//         this.length++
//     }

//     //remove from the beginning
//     shift() {
//         if(!this.head) return null
//         const temp = this.head
//         this.head = this.head.next
//         temp.next = null
//         this.length--

//         if(this.length === 0) {
//             this.tail = null
//         }
//         return temp
//     }

//     //remove at the end of the list
//     pop() {
//         if(!this.head) return null
//         let temp = this.head
//         let pre = this.head
//         while(temp.next) {
//             pre = temp
//             temp = temp.next
//         }
//         this.tail = pre
//         this.tail.next = null
//         this.length--
//         if(this.length === 0) {
//             this.head = null
//             this.tail = null
//         }
//         return temp
//     }

//     //find item at specific index
//     get(index) {
//         //check validation of index
//         if(index < 0 || index >= this.length) return null 
//         let temp = this.head
//         for(let i = 0; i < index; i++) {
//             temp = temp.next
//         }
//         return temp
//     }

//     //inserting item at specific index
//     set(index, value) {
//         let temp = this.get(index)
//         if(temp) {
//             temp.value = value
//             return true
//         }
//         return false
//     }

//     //inserting node specific index
//     insert(index, value) {
//         //validation index
//         if(index < 0 || index > this.length) return false
//         //inserting node at the beginning
//         if(index === 0) return this.unshift(value)
//         //inserting node at the end
//         if(index === this.length) return this.push(value)
//         //inserting in between
//         const newNode = new Node(value)
//         //stopping in the node before inserting at the node
//         const temp = this.get(index - 1)
//         newNode.next = temp.next
//         temp.next = newNode
//         this.length++
//         return true
//     }

//     //removing item at specific index 
//     remove(index) {
//         if(index < 0 || index >= this.length) return false
//         //removing from the beginning
//         if(index === 0) return this.shift()
//         //removing from the end
//         if(index === this.length - 1) return this.pop()
//         const prevRef = this.get(index - 1)
//         let temp = prevRef.next
//         prevRef.next = temp.next
//         temp.next = null
//         this.length--

//         return temp
//     }

//     //reversing the Linked List
//     reverse() {

//         //Head and tail Swap for reverse
//         let temp = this.head //(1) current
//         this.head = this.tail
//         this.tail = temp

//         //working with three pointer
//         let next = temp.next //(2) forward
//         let prev = null //(3) previous
//         for(let i = 0; i < this.length; i++) {
//             next = temp.next //Head Value Not changed same value 
//             temp.next = prev //Null
//             prev = temp //current
//             temp = next //forward
//         }

//     }
// }

// const linkList = new LinkedList(10)
// linkList.push(11)
// linkList.unshift(9)
// linkList.pop()
// console.log(linkList.get(1))
// linkList.set(0, 3)
// linkList.insert(0, 8)
// linkList.insert(0, 8)
// linkList.insert(2, 4)
// linkList.remove(2)
// linkList.reverse()
// // console.log(linkList.shift())
// console.log(linkList)


//Sorting
// Bubble sort
// move the largest element to the end

// function bubbleSort(arr) {
//     for(let i = 0; i < arr.length; i++) {
//         let swap = false
//         for(let j = 0; j < arr.length - i - 1; j++) {
//             console.log(arr[i], arr[j], arr[j + 1])
//             if(arr[j] > arr[j + 1]) {
//                 //swap 
//                 let temp = arr[j]
//                 arr[j] = arr[j + 1]
//                 arr[j + 1] = temp
//                 swap = true
//             }
//         }
//         if(!swap) break
//     }
//     return arr
// }
// console.log(bubbleSort([1, 10, 2, 20, 6, 30, 9]))


// Selection Sort(time-consuming)
// Smallest element will move to the left(priority)
// function selectionSort(arr) {
//     for(let i = 0; i < arr.length; i++) {

//     }
// }
// selectionSort([1, 5, 2, 9, 6, 10, 8])


//Reverse Linked List
// function reverseList(head) {
//     let prev = null
//     let curr = head
//     let forw = null
//     while(curr != null) {
//         forw = curr.next
//         curr.next = prev
//         prev = curr
//         curr = forw
//     }
//     return prev
// }

// console.log(null === null)

//
// function middleNote(head) {
//     if(head == null || head.next == null) return head
//     let slow = head
//     let fast = head
//     while(fast !== null && fast.next !== null) {
//         slow = slow.next
//         fast = fast.next.next
//     }
//     return slow
// }

//Linked list Cycle
// function hasCycle(head) {
//     let fast = head
//     let slow = head
//     while(fast !== null && fast.next !== null) {
//         fast = fast.next.next
//         slow = slow.next
//         if(fast === slow) return true
//     }
//     return false
// }

// //Linked List Palindrome
// function reverse(head) {
//     let prev = null
//     let curr = head
//     let forw = null
//     while(curr !== null) {
//         forw = curr.next   
//         curr.next = prev
//         prev = curr
//         curr = forw
//     }
//     return prev
// }
// //         forw = curr.next
// //         curr.next = prev
// //         prev = curr
// //         curr = forw

// function isPalindrome() {
//     let fast = head
//     let slow = head

//     //find Middle Pointer
//     while(fast !== null && fast.next !== null) {
//         fast = fast.next.next
//         slow = slow.next
//     }
//     slow = reverse(slow)

//     while(slow !== null && slow.val == head.val) {
//         head = head.next
//         slow = slow.next
//     }
//     return slow == null
// }

//Intersection of Two Linked Lists
// function removeNthFromEnd(head, n) {
//     const dummyHead = new ListNode(0)
//     dummyHead.next = head
//     let slow = dummyHead
//     let fast = head

//     for(let i = 1; i <= n; i++) {
//         fast = fast.next
//     }

//     while(fast != null) {
//         fast = fast.next
//         slow = slow.next
//     }
//     slow = slow.next.next

//     return dummyHead.next
// }

// Add Two Numbers
// function addTwoNumbers(l1, l2) {
//     const dummyHead = new ListNode(0)
//     let l3 = dummyHead
//     let carry = 0

//     while(l1 != null || l2 != null) {
//         const l1val = l1 != null ? l1.val : 0
//         const l2val = l2 != null ? l2.val : 0
//         let currentSum = l1val + l2val + carry
//         carry = Math.floor(currentSum / 10)
//         let lastDigit = currentSum % 10
//         const newNode = new ListNode(lastDigit)
//         l3.next = newNode
//         if(l1 != null) l1 = l1.next
//         if(l2 != null) l2 = l2.next
//         l3 = l3.next
//     }

//     if(carry > 0) {
//         const newNode = new ListNode(carry)
//         l3.next = newNode
//     }

//     return dummyHead.next
// }


//
// function oddEvenList(head) {
//     if(head == null) return null
//     let odd = head
//     let even = head.next
//     let evenHead = even


// }


//Doubly Linked List
// class Node{
//     constructor(value) {
//         this.value = value
//         this.prev = null
//         this.next = null
//     }
// }

// class DbLinkedList{
//     constructor(value) {
//         const newNode = new Node(value)
//         this.head = newNode
//         this.tail = newNode
//         this.length = 1
//     }

//     //adding item to the end
//     push(value) {
//         if(this.length === 0) {
//             this.head = newNode
//             this.tail = newNode
//         }else {
//             const newNode = new Node(value)
//             this.tail.next = newNode
//             newNode.prev = this.tail
//             this.tail = newNode
//         }
//         this.length++
//         return this
//     }

//     //removing item from the end
//     pop() {
//         if(!this.head) return null
//         let temp = this.tail
//         if(this.length === 1) {
//             this.head = null
//             this.tail = null
//         }else {
//             this.tail = this.tail.prev
//             this.tail.next = null
//             temp.prev = null
//         }
//         this.length--
//         return temp
//     }

//     //adding items at the beginning
//     unshift(value) {
//         const newNode = new Node(value)
//         if(this.length === 0) {
//             this.head = newNode
//             this.tail = newNode
//         }else {
//             this.head.prev = newNode
//             newNode.next = this.head
//             this.head = newNode
//         }
//         this.length++
//         return this
//     }

//     //removing items from the beginning
//     shift() {
//         if(!this.head) return null
//         const temp = this.head
//         this.head = this.head.next
//         if(this.head) {
//             this.head.prev = null
//         }
//         temp.next = null
//         this.length--
//         return temp
//     }

//     //Finding items at specific index
//     get(index) {
//         //invalid index
//         if(index < 0 || index >= this.length) return null
//         let temp = this.head
//         if(index < this.length / 2) {
//             for(let i = 0; i < index; i++) {
//                 temp = temp.next
//             }
//         }else {
//             temp = this.tail
//             for(let i = this.length - 1; i > index; i--) {
//                 temp = temp.prev
//             }
//         }
//         return temp
//     }

//     // Setting value at specific index
//     set(index, value) {
//         const temp = this.get(index)
//         if(temp) {
//             temp.value = value
//             return true
//         }
//         return false
//     }

//     // insert items at specific index
//     insert(index, value) {
//         if(index < 0 || index > this.length) return false
//         if(index === 0) return this.unshift(value)
//         if(index === this.length) return this.push(value)
//         const newNode = new Node(value)
//         const before = this.get(index - 1) // In multiple index minus to get before index
//         const after = before.next
//         before.next = newNode
//         newNode.prev = before
//         newNode.next = after
//         after.prev = newNode
//         this.length++
//         return this
//     }

//     //remove node in specific index
//     remove(index) {
//         if(index  < 0 || index > this.length) return false
//         if(index === 0) return this.shift()
//         if(index === this.length - 1) return this.pop()
//         let temp = this.get(index)
//         if(this.length > 1) {
//             temp.prev.next = temp.next
//             temp.next.prev = temp.prev 
//         }else {
//             this.head = null
//             this.tail = null
//         }
//         temp.prev = null
//         temp.next = null
//         this.length--
//         return temp
//     }
// }


// // [2, 3, 3, 9, 7, 5] - this.length

// const dblLinkedList = new DbLinkedList(10)
// dblLinkedList.push(8)
// dblLinkedList.pop()
// dblLinkedList.unshift(1)
// // dblLinkedList.shift()
// // dblLinkedList.shift()
// dblLinkedList.insert(2, 44)
// dblLinkedList.set(0, 911 )
// console.log(dblLinkedList.get(1))
// console.log(dblLinkedList)


//Stack
// class Node{
//     constructor(value) {
//         this.value = value
//         this.next = null
//     }
// }

// class Stack{
//     constructor(value) {
//         const newNode = new Node(value)
//         this.top = newNode
//         this.length = 1
//     }

//     //addding items to the top of the stack
//     push(value) {
//         const newNode = new Node(value)
//         if(this.length === 0) {
//             this.top = newNode
//         }else {
//             newNode.next = this.top
//             this.top = newNode
//         }
//         this.length++
//         return this
//     }

//     //
//     pop() {
//         if(this.length === 0) return null
//         let temp = this.top
//         this.top = temp.next
//         temp.next = null
//         this.length--
//         return temp
//     }

//     //
//     peek() {
//         const temp = this.pop()
//         this.push(temp)
//         return temp
//     }
// }

// const stack = new Stack(10)
// stack.push(9)
// stack.pop()
// // stack.pop()
// console.log(stack.peek())
// // stack.pop()
// console.log(stack)


//Queue
// class Node{
//     constructor(value) {
//         this.value = value
//         this.next = null
//     }
// }

// class Queue{
//     constructor(value) {
//         const newNode = new Node(value)
//         // this.value = value
//         this.first = newNode
//         this.last = newNode
//         this.length = 1
//     }

//     //adding items at the end of List
//     enqueue(value) {
//         const newNode = new Node(value)
//         if(!this.first) {
//             this.first = newNode
//             this.last = newNode
//         }else {
//             this.last.next = newNode
//             this.last = newNode
//         }
//         this.length++
//         return this
//     }

//     //
//     dequeue() {
//         if(!this.first) return null
//         let temp = this.first
//         if(this.length === 1) {
//             this.first = null
//             this.last = null
//         }else {
//             this.first = this.first.next
//             temp.next = null
//         }
//         this.length--
//         return temp
//     }
// }

// const queue = new Queue(3)
// console.log(queue.enqueue(9))
// console.log(queue.dequeue())
// console.log(queue)


//Array as stack
// [10, 12, 14, 16]
//push , pop - O(1) -At the end
// shift, unshift - O(n) -At the begining(X)


//Array as queue
// [10, 12, 14, 16]
//push - O(1) = (adding)
//shift - O(n) = (removing)

//Linked List Queue
//adding and removing  is O(1)


//BST
// class Node{
//     constructor(val) {
//         this.val = val
//         this.left = null
//         this.right = null
//     }
// }

// class BST{
//     constructor() {
//         this.root = null
//     }

//     //adding or inserting a node
//     insert(val) {
//         const newNode = new Node(val)
//         if(this.root === null) {
//             this.root = newNode
//             return this
//         }

//         let temp = this.root
//         while(true) {
//             if(temp.val === val) return undefined
//             if(newNode.val < temp.val) {
//                 if(temp.left === null) {
//                     temp.left = newNode
//                     return this
//                 }
//                 temp = temp.left
//             }else {
//                 if(temp.right === null) {
//                     temp.right = newNode
//                     return this
//                 }
//                 temp = temp.right
//             }
//         }
//     }

//     //if value is exists on the BST
//     contains(val) {
//         if(this.root === null) return false
//         let temp = this.root
//         while(temp) {
//             if(val < temp.val) {
//                 temp = temp.left
//             }else if(val > temp.val) {
//                 temp = temp.right
//             }else {
//                 return true
//             }
//         }
//         return false //result not found
//     }

//     //
//     BFS() {
//         let currentNode = this.root
//         let queue = [currentNode]
//         let results = []
//         while(queue.length) {
//             currentNode = queue.shift()
//             results.push(currentNode.val)
//             if(currentNode.left) {
//                 queue.push(currentNode.left)
//             }
//             if(currentNode.right) {
//                 queue.push(currentNode.right)
//             }
//         }
//         return results
//     }

//     DFSPreOrder() {
//         let results = []
//         function traverse(currentNode) {
//             results.push(currentNode.val)
//             if(currentNode.left) traverse(currentNode.left)
//             if(currentNode.right) traverse(currentNode.right)
//         }
//         traverse(this.root)
//         return results
//     }

//     //post order
//     DFSPostOrder() {
//         let results = []
//         function traverse(currentNode) {
//             if(currentNode.left) traverse(currentNode.left)
//             if(currentNode.right) traverse(currentNode.right)
//             results.push(currentNode.val)
//         }
//         traverse(this.root)
//         return results
//     }

//     //In Order
//     DFSInOrder() {
//         let results = []
//         function traverse(currentNode) {
//             if(currentNode.left) traverse(currentNode.left)
//             results.push(currentNode.val)
//             if(currentNode.right) traverse(currentNode.right)
//         }
//         traverse(this.root)
//         return results
//     }
// }

// // const node = new Node(10)
// const bst = new BST()
// bst.insert(10)
// bst.insert(11)
// bst.insert(12)
// bst.insert(13)
// bst.insert(14)
// bst.insert(9)
// bst.insert(8)
// console.log(bst.contains(10))
// console.log(bst.BFS())
// console.log(bst.DFSPreOrder())
// console.log(bst.DFSPostOrder())
// console.log(bst.DFSInOrder())


//
class MaxBinaryHeap {
    constructor() {
        this.values = []
    }

    insertElm(elm) {
        this.values.push(elm)
        this.bubbleUp()
    }

    bubbleUp() {
        let idx = this.values.length - 1
        const elementIdx = this.values[idx]
            // console.log(elementIdx)
        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2)
                // console.log(this.values[parentIdx])
            let parent = this.values[parentIdx]
            if (parent >= elementIdx) break
            this.values[parentIdx] = elementIdx
            this.values[idx] = parent
            idx = parentIdx
        }
    }
}

const maxBinary = new MaxBinaryHeap()
console.log(maxBinary.insertElm(50))
console.log(maxBinary.insertElm(7))
console.log(maxBinary.insertElm(5))
    // console.log(maxBinary.insertElm(7))
    // console.log(maxBinary.insertElm(0))
console.log(maxBinary.insertElm(9))
console.log(maxBinary.insertElm(15))
console.log(maxBinary.insertElm(19))
console.log(maxBinary.insertElm(30))

// console.log(maxBinary.bubbleUp())
console.log(maxBinary)