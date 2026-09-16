"use strict";
(function () {
/* -------------------------------------------------------------------------
   1. CODE SNIPPETS & HIGHLY-COMMENTED PYTHON LOGIC
   ------------------------------------------------------------------------- */
const MAX_DS_ITEMS = 10;
const snippets = {
    'code-lists': `# Creating a basic list\nplaylist = ["Kendrick", "Drake", "J.Cole"]\n\n# Accessing the first element (computers start counting at 0)\nprint(playlist[0])  # Output: Kendrick`,
    
    'code-loops': `# FOR LOOP: When you know exactly how many times to run.\nfor i in range(3):\n    print(i)  # Prints 0, then 1, then 2\n\n# WHILE LOOP: When you are waiting for a condition to change.\ntired = True\nwhile tired:\n    print("Need coffee")\n    tired = False  # Updating the condition so the loop eventually breaks`,
    
    'code-functions': `# Functions are reusable blocks of code.\n# 'def' defines a function. 'return' sends back a result.\ndef add(a, b):\n    result = a + b\n    return result\n\n# Calling a function: use its name with arguments\nsum_value = add(5, 3)\nprint(sum_value)  # Output: 8\n\n# Functions can have default parameters\ndef greet(name="Student"):\n    return "Hello, " + name\n\nprint(greet())        # Hello, Student\nprint(greet("Alex"))  # Hello, Alex`,
    
    'code-ifelse': `# Conditions let your code make decisions.\ntemperature = 30\n\nif temperature > 35:\n    print("Too hot!")\nelif temperature > 20:\n    print("Just right.")\nelse:\n    print("A bit cold.")\n\n# Comparison operators for if statements:\n# ==   equal to\n# !=   not equal to\n# <    less than\n# >    greater than\n# <=   less than or equal to\n# >=   greater than or equal to`,
    
    'code-range-len': `# range(n) creates numbers 0, 1, 2, ..., up to n-1.\nfor i in range(3):\n    print(i)  # Prints 0, then 1, then 2\n\n# len(list) gives the number of items in a list.\nfruits = ["apple", "banana", "mango"]\nprint(len(fruits))  # Output: 3\n\n# Together: loop through every index of a list.\nfor i in range(len(fruits)):\n    print(fruits[i])  # apple, banana, mango`,
    
    'code-swap': `# Swap two variables in one line.\na = 5\nb = 10\na, b = b, a  # Now a=10, b=5\nprint(a, b)  # Output: 10 5\n\n# Lists are "mutable" — you can change items in-place.\nnums = [3, 1, 4]\nnums[0] = 99       # Change the first element\nprint(nums)        # [99, 1, 4]\n\n# You can also swap items inside a list.\nnums[1], nums[2] = nums[2], nums[1]\nprint(nums)        # [99, 4, 1]`,

    'code-program': `# A program is a recipe. Python runs it from the top down.\nname = "Ada"      # A variable: a labeled box that holds a value.\nprint(name)       # Show it on the screen.`,

    'code-indent': `# The indented lines belong to the if. Wrong spaces = the recipe breaks.\nscore = 80\nif score >= 50:\n    print("Pass")\nprint("Always runs")  # Not indented — not inside the if.`,

    'code-print-return': `# print shows a message. return sends an answer back to the caller.\ndef double(n):\n    return n * 2\n\nresult = double(4)\nprint(result)  # 8 — we printed what came back.`,

    'code-dict': `# A dict is labeled drawers, not numbered shelves.\nages = {"Ada": 36, "Grace": 85}\nprint(ages["Ada"])  # 36`,

    'code-grid2d': `# A grid is a list of rows. Each row is a list of cells.\nrow0 = [".", ".", "#"]\nrow1 = [".", ".", "."]\ngrid = [row0, row1]\nprint(grid[0][2])  # "#"  — row 0, column 2`,
    
    'code-linear-search': `def linear_search(arr, target):\n    # 'arr' is our list of items. 'target' is what we are looking for.\n    # len(arr) gives us the total number of items in the list.\n    # range() creates a sequence of numbers from 0 up to (but not including) the length.\n    for i in range(len(arr)):\n        \n        # arr[i] accesses the item at the current position 'i'.\n        # We check if this item is exactly equal to our target.\n        if arr[i] == target:\n            # Found it! We immediately stop the function and return the position 'i'.\n            return i  \n            \n    # If the loop finishes entirely, it means we checked every single item \n    # and none of them matched the target.\n    # We return -1, which is a standard way in programming to say "Not found".\n    return -1`,
    
    'code-binary-iter': `def binary_search(arr, target):\n    # Binary search ONLY works on sorted lists.\n    # We define our search window using two pointers: 'low' and 'high'.\n    low = 0                   # The very first index\n    high = len(arr) - 1       # The very last index\n    \n    # We keep looping as long as our search window is valid (low hasn't crossed high).\n    while low <= high:\n        \n        # Find the exact middle of our current search window.\n        # The '//' operator performs integer division, so 5 // 2 becomes 2.\n        mid = (low + high) // 2  \n        \n        # Check if the middle element is our target. Best case scenario!\n        if arr[mid] == target:\n            return mid\n            \n        # If the middle element is LESS than our target...\n        # Since the list is sorted, everything to the left is even smaller.\n        # So, the target MUST be on the right side.\n        elif arr[mid] < target:\n            low = mid + 1     # Move the 'low' boundary just past the middle.\n            \n        # If the middle element is GREATER than our target...\n        # The target MUST be on the left side.\n        else:\n            high = mid - 1    # Move the 'high' boundary just before the middle.\n            \n    # If the loop ends and we haven't returned anything, the target isn't in the list.\n    return -1`,

    'code-bfs-tree': `from collections import deque\n\ndef bfs_tree(graph, start, goal):\n    # graph is an adjacency list: {"A": ["B", "C"], ...}\n    # A deque is a queue: append() to the back, popleft() from the front.\n    queue = deque([start])\n    visited = set([start])  # Never enqueue the same node twice (cycles).\n    parent = {start: None}  # Remember how we arrived, to rebuild the path.\n\n    while queue:\n        node = queue.popleft()  # Closest remaining node (fewest hops so far).\n        if node == goal:\n            # Walk parent pointers from goal back to start, then reverse.\n            path = []\n            cur = goal\n            while cur is not None:\n                path.append(cur)\n                cur = parent[cur]\n            path.reverse()\n            return path\n        for neighbor in graph[node]:\n            if neighbor not in visited:\n                visited.add(neighbor)\n                parent[neighbor] = node\n                queue.append(neighbor)\n    return None  # Queue emptied — no path.`,

    'code-bfs-grid': `from collections import deque\n\ndef neighbors4(r, c):\n    # Four-way moves only. No diagonals.\n    return [(r - 1, c), (r + 1, c), (r, c - 1), (r, c + 1)]\n\ndef bfs_grid(grid, start, goal):\n    # grid[r][c] is "#" for a wall, "." for open. start and goal are (r, c).\n    rows, cols = len(grid), len(grid[0])\n    queue = deque([start])\n    visited = set([start])\n    parent = {start: None}\n\n    while queue:\n        r, c = queue.popleft()\n        if (r, c) == goal:\n            path = []\n            cur = goal\n            while cur is not None:\n                path.append(cur)\n                cur = parent[cur]\n            path.reverse()\n            return path\n        for nr, nc in neighbors4(r, c):\n            if nr < 0 or nc < 0 or nr >= rows or nc >= cols:\n                continue\n            if grid[nr][nc] == "#":\n                continue\n            if (nr, nc) in visited:\n                continue\n            visited.add((nr, nc))\n            parent[(nr, nc)] = (r, c)\n            queue.append((nr, nc))\n    return None`,

    'code-astar-tree': `import heapq\n\ndef astar_tree(graph, start, goal, h):\n    # h(node) guesses remaining hops and must NEVER overestimate.\n    # Open set is a min-heap of (f, node). f = g + h.\n    g = {start: 0}\n    parent = {start: None}\n    open_heap = [(h(start), start)]  # f starts as 0 + h(start)\n    open_set = set([start])\n\n    while open_heap:\n        f, node = heapq.heappop(open_heap)\n        open_set.discard(node)\n        if node == goal:\n            path = []\n            cur = goal\n            while cur is not None:\n                path.append(cur)\n                cur = parent[cur]\n            path.reverse()\n            return path\n        for neighbor in graph[node]:\n            g2 = g[node] + 1\n            if neighbor not in g or g2 < g[neighbor]:\n                g[neighbor] = g2\n                parent[neighbor] = node\n                f2 = g2 + h(neighbor)\n                if neighbor not in open_set:\n                    heapq.heappush(open_heap, (f2, neighbor))\n                    open_set.add(neighbor)\n    return None`,

    'code-astar-grid': `import heapq\n\ndef manhattan(cell, goal):\n    # Taxi-meter distance. With 4-way moves this never overestimates steps.\n    r, c = cell\n    gr, gc = goal\n    return abs(r - gr) + abs(c - gc)\n\ndef astar_grid(grid, start, goal):\n    rows, cols = len(grid), len(grid[0])\n    g = {start: 0}\n    parent = {start: None}\n    open_heap = [(manhattan(start, goal), start)]\n    open_set = set([start])\n\n    while open_heap:\n        f, cell = heapq.heappop(open_heap)\n        open_set.discard(cell)\n        if cell == goal:\n            path = []\n            cur = goal\n            while cur is not None:\n                path.append(cur)\n                cur = parent[cur]\n            path.reverse()\n            return path\n        r, c = cell\n        for nr, nc in [(r - 1, c), (r + 1, c), (r, c - 1), (r, c + 1)]:\n            if nr < 0 or nc < 0 or nr >= rows or nc >= cols:\n                continue\n            if grid[nr][nc] == "#":\n                continue\n            g2 = g[cell] + 1\n            nxt = (nr, nc)\n            if nxt not in g or g2 < g[nxt]:\n                g[nxt] = g2\n                parent[nxt] = cell\n                f2 = g2 + manhattan(nxt, goal)\n                if nxt not in open_set:\n                    heapq.heappush(open_heap, (f2, nxt))\n                    open_set.add(nxt)\n    return None`,
    
    'code-selection-sort': `def selection_sort(arr):\n    n = len(arr)\n    \n    # We need to place 'n' items in their correct sorted positions.\n    # The outer loop 'i' represents the current position we are trying to fill.\n    for i in range(n):\n        \n        # Step 1: Assume the item currently sitting at index 'i' is the smallest.\n        min_idx = i\n        \n        # Step 2: Scan the REST of the list to see if we can find something even smaller.\n        # We start from 'i + 1' because everything before 'i' is already sorted!\n        for j in range(i + 1, n):\n            \n            # If we find an item smaller than our current known minimum...\n            if arr[j] < arr[min_idx]:\n                # ...update 'min_idx' to remember this new smallest item's location.\n                min_idx = j \n                \n        # Step 3: We finished scanning. 'min_idx' now holds the TRUE smallest item.\n        # We swap the true smallest item into its correct position at index 'i'.\n        arr[i], arr[min_idx] = arr[min_idx], arr[i]\n        \n    # The array is now fully sorted.\n    return arr`,
    
    'code-bubble-sort': `def bubble_sort(arr):\n    n = len(arr)\n    for i in range(n):\n        swapped = False  # Did this pass change anything?\n        for j in range(0, n - i - 1):\n            if arr[j] > arr[j + 1]:\n                arr[j], arr[j + 1] = arr[j + 1], arr[j]\n                swapped = True\n        # If a full pass made zero swaps, every pair is already in order.\n        if not swapped:\n            break\n    return arr`,
    
    'code-quick-sort': `def quick_sort(arr, low, high):\n    # This is a recursive function. It calls itself!\n    # Base case: if low is not less than high, the sub-list has 0 or 1 item, so it's sorted.\n    if low < high:\n        \n        # Step 1: Pick a "pivot" and place it in its perfectly sorted final position.\n        # The 'partition' function does this and returns that final index (pi).\n        pi = partition(arr, low, high)\n        \n        # Step 2: Now that the pivot is locked in place, sort the left squad (smaller items).\n        quick_sort(arr, low, pi - 1)\n        \n        # Step 3: Sort the right squad (larger items).\n        quick_sort(arr, pi + 1, high)\n\ndef partition(arr, low, high):\n    # We choose the very last element in the current window as our Pivot.\n    pivot = arr[high]\n    \n    # Pointer 'i' acts as the boundary for elements that are SMALLER than the pivot.\n    # It starts just outside our window.\n    i = low - 1\n    \n    # Scan through every item in the window (except the pivot itself at 'high').\n    for j in range(low, high):\n        \n        # If the current item is smaller than or equal to the pivot...\n        if arr[j] <= pivot:\n            \n            # ...we expand our "smaller than pivot" boundary by 1.\n            i = i + 1 \n            \n            # Then we swap the smaller item into this boundary area.\n            arr[i], arr[j] = arr[j], arr[i] \n            \n    # Finally, we take the pivot (at index 'high') and swap it to sit exactly \n    # right after the boundary of smaller elements (at index i + 1).\n    arr[i + 1], arr[high] = arr[high], arr[i + 1]\n    \n    # Return the index where the pivot permanently sits.\n    return i + 1`,

    'code-merge-sort': `def merge_sort(arr, low, high):\n    # Base case: 0 or 1 item is already sorted.\n    if low >= high:\n        return\n    mid = (low + high) // 2\n    # Split, sort each half, then merge the two sorted halves.\n    merge_sort(arr, low, mid)\n    merge_sort(arr, mid + 1, high)\n    merge(arr, low, mid, high)\n\ndef merge(arr, low, mid, high):\n    # Copy the two sorted halves into temp lists.\n    left = arr[low:mid + 1]\n    right = arr[mid + 1:high + 1]\n    i = j = 0\n    k = low\n    # Walk both lists; always take the smaller front item.\n    while i < len(left) and j < len(right):\n        if left[i] <= right[j]:\n            arr[k] = left[i]\n            i += 1\n        else:\n            arr[k] = right[j]\n            j += 1\n        k += 1\n    # Copy any leftovers.\n    while i < len(left):\n        arr[k] = left[i]\n        i += 1\n        k += 1\n    while j < len(right):\n        arr[k] = right[j]\n        j += 1\n        k += 1`,

    'code-hash-map': `class HashMap:\n    def __init__(self, buckets=7):\n        # Each bucket is a small chain (list) of [key, value] pairs.\n        self.buckets = [[] for _ in range(buckets)]\n\n    def _hash(self, key):\n        # Turn the key into a bucket index. Same idea as locker row numbers.\n        return sum(ord(c) for c in key) % len(self.buckets)\n\n    def put(self, key, value):\n        b = self._hash(key)\n        for i, (k, _) in enumerate(self.buckets[b]):\n            if k == key:\n                self.buckets[b][i] = [key, value]  # Update existing key.\n                return\n        self.buckets[b].append([key, value])  # New key at end of chain.\n\n    def get(self, key):\n        b = self._hash(key)\n        for k, v in self.buckets[b]:\n            if k == key:\n                return v\n        return None  # Not in the map.`,

    'code-stack': `class Stack:\n    # A stack is like a stack of plates — last one on top is the first one off.\n    def __init__(self):\n        self.items = []  # The stack is just a list underneath.\n    \n    def push(self, item):\n        # Add an item to the top of the stack.\n        # In Python, list.append() adds to the end, which is our "top."\n        self.items.append(item)\n    \n    def pop(self):\n        # Remove and return the top item.\n        # Always check if the stack is empty first!\n        if not self.is_empty():\n            return self.items.pop()\n        return None  # Return None if the stack is empty (underflow).\n    \n    def peek(self):\n        # Look at the top item without removing it.\n        # self.items[-1] accesses the last element in the list.\n        if not self.is_empty():\n            return self.items[-1]\n        return None\n    \n    def is_empty(self):\n        # Returns True if the stack has no items.\n        return len(self.items) == 0\n    \n    def size(self):\n        # How many items are in the stack?\n        return len(self.items)`,

    'code-queue': `class Queue:\n    # A queue is like a line at a coffee shop — first person in line gets served first.\n    def __init__(self):\n        self.items = []  # The queue is stored as a list.\n        # Front of the line = index 0. Rear = the end of the list.\n    \n    def enqueue(self, item):\n        # Add an item to the back of the line (rear).\n        # We append to the end of the list.\n        self.items.append(item)\n    \n    def dequeue(self):\n        # Remove and return the front item (the one who waited longest).\n        # list.pop(0) removes the first element.\n        if not self.is_empty():\n            return self.items.pop(0)\n        return None\n    \n    def front(self):\n        # Look at the front item without removing it.\n        if not self.is_empty():\n            return self.items[0]\n        return None\n    \n    def is_empty(self):\n        # Returns True if the queue has no one waiting.\n        return len(self.items) == 0\n    \n    def size(self):\n        # How many people are in line?\n        return len(self.items)`,

    'code-linked-list': `class Node:\n    # A single building block of a linked list.\n    # Each node holds data AND a pointer to the next node.\n    def __init__(self, data):\n        self.data = data      # The value stored in this node.\n        self.next = None      # Points to the next node (or None if it's the last).\n\nclass LinkedList:\n    # A chain of nodes where each node points to the next one.\n    def __init__(self):\n        self.head = None  # The start of the list. None means the list is empty.\n    \n    def insert_at_head(self, data):\n        # Add a new node at the very front of the list.\n        new_node = Node(data)    # Create the new node.\n        new_node.next = self.head  # Point it at the current head.\n        self.head = new_node     # The new node is now the head.\n    \n    def insert_at_tail(self, data):\n        # Add a new node at the very end of the list.\n        new_node = Node(data)\n        if self.head is None:\n            # If the list is empty, the new node becomes the head.\n            self.head = new_node\n            return\n        # Otherwise, walk to the last node.\n        current = self.head\n        while current.next is not None:\n            current = current.next\n        # Point the old last node at the new node.\n        current.next = new_node\n    \n    def delete(self, target):\n        # Remove the first node that contains the target value.\n        if self.head is None:\n            return False  # Empty list, nothing to delete.\n        \n        if self.head.data == target:\n            # The target is the head. Skip it by pointing head at the next node.\n            self.head = self.head.next\n            return True\n        \n        # Walk through the list until we find the target.\n        current = self.head\n        while current.next is not None:\n            if current.next.data == target:\n                # Skip over the target node — it's now "unlinked."\n                current.next = current.next.next\n                return True\n            current = current.next\n        return False  # Target not found anywhere in the list.\n    \n    def search(self, target):\n        # Returns True if the target value exists in the list.\n        current = self.head\n        while current is not None:\n            if current.data == target:\n                return True\n            current = current.next\n        return False\n    \n    def to_list(self):\n        # Convert the linked list to a regular Python list (for display).\n        result = []\n        current = self.head\n        while current is not None:\n            result.append(current.data)\n            current = current.next\n        return result`
};

function escapeHtml(text) {
    return String(text).replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function highlightPython(line) {
    const escaped = escapeHtml(line);
    return escaped.replace(
        /(#.*)|(["'].*?["'])|\b(def|for|while|if|elif|else|return|in|not|and|or|True|False|None|break|continue|from|import|class)\b|\b(range|len|print|deque|heappush|heappop|abs)\b|\b(\d+)\b/g,
        (match, comment, str, kw, func, num) => {
            if (comment !== undefined) return `<span class="comment">${comment}</span>`;
            if (str !== undefined) return `<span class="str">${str}</span>`;
            if (kw !== undefined) return `<span class="kw">${kw}</span>`;
            if (func !== undefined) return `<span class="func">${func}</span>`;
            if (num !== undefined) return `<span class="num">${num}</span>`;
            return match;
        }
    );
}

function renderCode(code) {
    const lines = code.split('\n');
    return lines.map((line, i) => {
        const num = i + 1;
        const content = highlightPython(line) || ' ';
        return `<div class="code-line"><span class="line-num">${num}</span><span class="line-content">${content}</span></div>`;
    }).join('');
}

function readInt(input) {
    return parseInt(input.value, 10);
}

function dsEmpty(message) {
    const empty = document.createElement('div');
    empty.className = 'ds-empty';
    empty.textContent = message;
    return empty;
}

function setStatus(el, text) {
    if (el) el.textContent = text;
}

function bindSortControls(viz, sortBtnId, resetBtnId, statusId, methodName) {
    const statusEl = document.getElementById(statusId);
    document.getElementById(sortBtnId).addEventListener('click', () => viz[methodName](statusEl));
    document.getElementById(resetBtnId).addEventListener('click', () => {
        viz.isSorting = false;
        viz.init(false);
        setStatus(statusEl, 'Stopped. New numbers. Press the main button when you are ready.');
    });
}

function bindSearchControls(viz, methodName, searchBtnId, resetBtnId, inputId, statusId) {
    const input = document.getElementById(inputId);
    const statusEl = document.getElementById(statusId);
    document.getElementById(searchBtnId).addEventListener('click', () => {
        const val = readInt(input);
        if (isNaN(val)) { setStatus(statusEl, 'That is not a whole number. Type digits like 11, then press Search.'); return; }
        viz[methodName](val, statusEl);
    });
    document.getElementById(resetBtnId).addEventListener('click', () => {
        viz.isSorting = false;
        viz.init(false);
        setStatus(statusEl, 'Stopped. New list. Type a number from the bars, then Search.');
        input.value = viz.array[Math.floor(Math.random() * viz.array.length)];
    });
}

// Set current year in footer
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Inject highlighted code snippets with line numbers
for (const [id, code] of Object.entries(snippets)) {
    const el = document.getElementById(id);
    if (el) el.innerHTML = renderCode(code);
}

/* -------------------------------------------------------------------------
   2. VISUALIZER ENGINE
   ------------------------------------------------------------------------- */
class Visualizer {
    constructor(containerId, isSorted = false, arraySize = 10, seed = null) {
        this.container = document.getElementById(containerId);
        this.isSorted = isSorted;
        this.arraySize = arraySize;
        this.seed = seed;
        this.array = [];
        this.bars = [];
        this.delay = 300;
        this.isSorting = false;
        this.init(true);
    }

    init(useSeed = false) {
        this.array = [];
        if (useSeed && this.seed && this.seed.length) {
            this.array = this.seed.slice();
        } else {
            let vals = [];
            for (let i = 0; i < this.arraySize; i++) vals.push(Math.floor(Math.random() * 90) + 10);
            if (this.isSorted) vals.sort((a, b) => a - b);
            this.array = vals;
        }
        this.render();
    }

    render() {
        this.container.innerHTML = '';
        this.bars = [];
        const maxVal = Math.max(...this.array, 100);
        
        this.array.forEach((val, idx) => {
            const bar = document.createElement('div');
            bar.className = 'viz-bar';
            const heightPercent = (val / maxVal) * 90; 
            bar.style.height = `${heightPercent}%`;
            bar.style.width = `${100 / this.array.length - 2}%`;
            
            const span = document.createElement('span');
            span.textContent = val;
            bar.appendChild(span);
            
            this.container.appendChild(bar);
            this.bars.push(bar);
        });
    }

    async sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }

    async swap(i, j) {
        const heightI = this.bars[i].style.height;
        const textI = this.bars[i].querySelector('span').textContent;
        
        this.bars[i].style.height = this.bars[j].style.height;
        this.bars[i].querySelector('span').textContent = this.bars[j].querySelector('span').textContent;
        
        this.bars[j].style.height = heightI;
        this.bars[j].querySelector('span').textContent = textI;

        let temp = this.array[i];
        this.array[i] = this.array[j];
        this.array[j] = temp;
    }

    resetColors() {
        this.bars.forEach(b => { b.className = 'viz-bar'; });
    }

    // --- Algorithms ---
    async linearSearch(target, statusEl) {
        if (this.isSorting) return; this.isSorting = true;
        this.resetColors();
        statusEl.textContent = "Starting at the left. Yellow = the one we are looking at.";
        for(let i=0; i<this.array.length; i++) {
            this.bars[i].classList.add('active');
            statusEl.textContent = `Step ${i + 1}: looking at ${this.array[i]} (position ${i}).`;
            await this.sleep(this.delay * 1.5);
            if(this.array[i] === target) {
                this.bars[i].classList.remove('active');
                this.bars[i].classList.add('sorted');
                statusEl.textContent = `Step ${i + 1}: match. Position ${i} (counting from 0).`;
                this.isSorting = false;
                return;
            }
            this.bars[i].classList.remove('active');
            this.bars[i].classList.add('inactive');
        }
        statusEl.textContent = "Checked every bar. That number is not here (same idea as returning -1).";
        this.isSorting = false;
    }

    async binarySearch(target, statusEl) {
        if (this.isSorting) return; this.isSorting = true;
        this.resetColors();
        let low = 0; let high = this.array.length - 1;
        while(low <= high) {
            let mid = Math.floor((low + high) / 2);
            for(let i=0; i<this.array.length; i++) {
                if(i < low || i > high) this.bars[i].classList.add('inactive');
                else this.bars[i].classList.remove('inactive');
            }
            this.bars[mid].classList.add('active');
            statusEl.textContent = `Middle of the remaining window is ${this.array[mid]} at position ${mid}.`;
            await this.sleep(this.delay * 2);

            if(this.array[mid] === target) {
                this.bars[mid].classList.remove('active');
                this.bars[mid].classList.add('sorted');
                statusEl.textContent = `Match at position ${mid}. Grey bars cannot hold the target.`;
                this.isSorting = false; return;
            }
            
            if(this.array[mid] < target) {
                statusEl.textContent = `${this.array[mid]} is too small. Keep only the right half.`;
                low = mid + 1;
            } else {
                statusEl.textContent = `${this.array[mid]} is too big. Keep only the left half.`;
                high = mid - 1;
            }
            this.bars[mid].classList.remove('active');
            await this.sleep(this.delay);
        }
        statusEl.textContent = "Window emptied. Not in this sorted list (return -1).";
        this.isSorting = false;
    }

    async selectionSort(statusEl) {
        if (this.isSorting) return; this.isSorting = true;
        this.resetColors();
        for(let i=0; i<this.array.length; i++) {
            let minIdx = i;
            this.bars[i].classList.add('active');
            for(let j=i+1; j<this.array.length; j++) {
                this.bars[j].classList.add('comparing');
                await this.sleep(this.delay / 2);
                if(this.array[j] < this.array[minIdx]) {
                    if(minIdx !== i) this.bars[minIdx].classList.remove('pivot');
                    minIdx = j;
                    this.bars[minIdx].classList.add('pivot');
                }
                this.bars[j].classList.remove('comparing');
            }
            if(minIdx !== i) {
                await this.swap(i, minIdx);
                this.bars[minIdx].classList.remove('pivot');
            }
            this.bars[i].classList.remove('active');
            this.bars[i].classList.add('sorted');
        }
        statusEl.textContent = "Sorted!";
        this.isSorting = false;
    }

    async bubbleSort(statusEl) {
        if (this.isSorting) return; this.isSorting = true;
        this.resetColors();
        let n = this.array.length;
        for (let i = 0; i < n; i++) {
            let swapped = false;
            for (let j = 0; j < n - i - 1; j++) {
                if (!this.isSorting) return;
                this.bars[j].classList.add('comparing');
                this.bars[j + 1].classList.add('comparing');
                await this.sleep(this.delay / 2);
                if (this.array[j] > this.array[j + 1]) {
                    await this.swap(j, j + 1);
                    swapped = true;
                }
                this.bars[j].classList.remove('comparing');
                this.bars[j + 1].classList.remove('comparing');
            }
            this.bars[n - i - 1].classList.add('sorted');
            if (!swapped) {
                for (let k = 0; k < n - i; k++) this.bars[k].classList.add('sorted');
                statusEl.textContent = 'No swaps this pass — already in order. Stopping early.';
                this.isSorting = false;
                return;
            }
        }
        statusEl.textContent = "Sorted!";
        this.isSorting = false;
    }

    async quickSort(statusEl, low = 0, high = this.array.length - 1, isRoot = true) {
        if (isRoot) {
            if (this.isSorting) return;
            this.isSorting = true;
            this.resetColors();
        }
        
        if (low < high) {
            let pi = await this.partition(low, high);
            await this.quickSort(statusEl, low, pi - 1, false);
            await this.quickSort(statusEl, pi + 1, high, false);
        } else if (low >= 0 && high >= 0 && low < this.array.length && low === high) {
            this.bars[low].classList.add('sorted');
        }
        
        if (isRoot) {
            for(let i=0; i<this.array.length; i++) this.bars[i].classList.add('sorted');
            statusEl.textContent = "Sorted!";
            this.isSorting = false;
        }
    }

    async partition(low, high) {
        let pivot = this.array[high];
        this.bars[high].classList.add('pivot');
        let i = (low - 1);
        
        for (let j = low; j <= high - 1; j++) {
            this.bars[j].classList.add('comparing');
            await this.sleep(this.delay / 2);
            
            if (this.array[j] < pivot) {
                i++;
                await this.swap(i, j);
            }
            this.bars[j].classList.remove('comparing');
        }
        await this.swap(i + 1, high);
        this.bars[high].classList.remove('pivot');
        this.bars[i + 1].classList.add('sorted');
        return (i + 1);
    }

    async mergeSort(statusEl, low = 0, high = this.array.length - 1, isRoot = true) {
        if (isRoot) {
            if (this.isSorting) return;
            this.isSorting = true;
            this.resetColors();
        }
        if (!this.isSorting) return;
        if (low >= high) {
            if (low >= 0 && low < this.array.length) this.bars[low].classList.add('sorted');
            if (isRoot) {
                for (let i = 0; i < this.array.length; i++) this.bars[i].classList.add('sorted');
                statusEl.textContent = 'Sorted!';
                this.isSorting = false;
            }
            return;
        }
        const mid = Math.floor((low + high) / 2);
        statusEl.textContent = `Split positions ${low}–${high} at middle ${mid}.`;
        for (let i = low; i <= mid; i++) this.bars[i].classList.add('comparing');
        for (let i = mid + 1; i <= high; i++) this.bars[i].classList.add('active');
        await this.sleep(this.delay);
        for (let i = low; i <= high; i++) this.bars[i].classList.remove('comparing', 'active');
        await this.mergeSort(statusEl, low, mid, false);
        await this.mergeSort(statusEl, mid + 1, high, false);
        await this.merge(low, mid, high, statusEl);
        if (isRoot) {
            for (let i = 0; i < this.array.length; i++) this.bars[i].classList.add('sorted');
            statusEl.textContent = 'Sorted!';
            this.isSorting = false;
        }
    }

    async merge(low, mid, high, statusEl) {
        const left = this.array.slice(low, mid + 1);
        const right = this.array.slice(mid + 1, high + 1);
        let i = 0;
        let j = 0;
        let k = low;
        statusEl.textContent = `Merge the two sorted halves of ${low}–${high}.`;
        while (i < left.length && j < right.length) {
            if (!this.isSorting) return;
            this.bars[k].classList.add('comparing');
            await this.sleep(this.delay / 2);
            if (left[i] <= right[j]) {
                this.array[k] = left[i++];
            } else {
                this.array[k] = right[j++];
            }
            this.render();
            this.bars[k].classList.remove('comparing');
            k++;
        }
        while (i < left.length) {
            this.array[k++] = left[i++];
            this.render();
        }
        while (j < right.length) {
            this.array[k++] = right[j++];
            this.render();
        }
        await this.sleep(this.delay / 2);
    }
}

/* -------------------------------------------------------------------------
   3. DATA STRUCTURE VISUALIZERS
   ------------------------------------------------------------------------- */
class StackVisualizer {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.items = [];
        this.maxItems = MAX_DS_ITEMS;
        this.render();
    }

    render() {
        this.container.innerHTML = '';
        const wrapper = document.createElement('div');
        wrapper.className = 'ds-stack-wrapper';

        for (let i = this.items.length - 1; i >= 0; i--) {
            const el = document.createElement('div');
            el.className = 'ds-stack-item';
            el.textContent = this.items[i];
            wrapper.appendChild(el);
        }

        if (this.items.length === 0) {
            wrapper.appendChild(dsEmpty('Stack is empty'));
        }

        this.container.appendChild(wrapper);
    }

    push(val) {
        if (this.items.length >= this.maxItems) return false;
        this.items.push(val);
        this.render();
        return true;
    }

    pop() {
        if (this.items.length === 0) return null;
        const val = this.items.pop();
        this.render();
        return val;
    }

    peek() {
        if (this.items.length === 0) return null;
        return this.items[this.items.length - 1];
    }

    reset() {
        this.items = [];
        this.render();
    }

    size() { return this.items.length; }
}

class QueueVisualizer {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.items = [];
        this.maxItems = MAX_DS_ITEMS;
        this.render();
    }

    render() {
        this.container.innerHTML = '';
        const wrapper = document.createElement('div');
        wrapper.className = 'ds-queue-wrapper';

        const frontLabel = document.createElement('div');
        frontLabel.className = 'ds-queue-label';
        frontLabel.textContent = 'Front →';
        wrapper.appendChild(frontLabel);

        this.items.forEach((val, i) => {
            const el = document.createElement('div');
            el.className = 'ds-queue-item';
            el.textContent = val;
            if (i === 0) el.classList.add('front');
            if (i === this.items.length - 1) el.classList.add('rear');
            wrapper.appendChild(el);

            if (i < this.items.length - 1) {
                const arrow = document.createElement('span');
                arrow.className = 'ds-queue-arrow';
                arrow.textContent = '→';
                wrapper.appendChild(arrow);
            }
        });

        if (this.items.length === 0) {
            wrapper.appendChild(dsEmpty('Queue is empty'));
        }

        const rearLabel = document.createElement('div');
        rearLabel.className = 'ds-queue-label';
        rearLabel.textContent = '← Rear';
        wrapper.appendChild(rearLabel);

        this.container.appendChild(wrapper);
    }

    enqueue(val) {
        if (this.items.length >= this.maxItems) return false;
        this.items.push(val);
        this.render();
        return true;
    }

    dequeue() {
        if (this.items.length === 0) return null;
        const val = this.items.shift();
        this.render();
        return val;
    }

    front() {
        if (this.items.length === 0) return null;
        return this.items[0];
    }

    reset() {
        this.items = [];
        this.render();
    }

    size() { return this.items.length; }
}

class LinkedListVisualizer {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.items = [];
        this.maxItems = MAX_DS_ITEMS;
        this.render();
    }

    render() {
        this.container.innerHTML = '';
        const wrapper = document.createElement('div');
        wrapper.className = 'ds-ll-wrapper';

        if (this.items.length === 0) {
            wrapper.appendChild(dsEmpty('List is empty'));
        } else {
            const headLabel = document.createElement('div');
            headLabel.className = 'ds-ll-label';
            headLabel.textContent = 'Head';
            wrapper.appendChild(headLabel);

            this.items.forEach((val, i) => {
                const node = document.createElement('div');
                node.className = 'ds-ll-node';
                const valEl = document.createElement('span');
                valEl.className = 'ds-ll-val';
                valEl.textContent = val;
                const ptrEl = document.createElement('span');
                ptrEl.className = 'ds-ll-pointer';
                ptrEl.textContent = 'next';
                node.append(valEl, ptrEl);
                wrapper.appendChild(node);

                if (i < this.items.length - 1) {
                    const arrow = document.createElement('span');
                    arrow.className = 'ds-ll-arrow';
                    arrow.textContent = '→';
                    wrapper.appendChild(arrow);
                }
            });

            const end = document.createElement('div');
            end.className = 'ds-ll-end';
            end.textContent = 'None';
            wrapper.appendChild(end);
        }

        this.container.appendChild(wrapper);
    }

    insertHead(val) {
        if (this.items.length >= this.maxItems) return false;
        this.items.unshift(val);
        this.render();
        return true;
    }

    insertTail(val) {
        if (this.items.length >= this.maxItems) return false;
        this.items.push(val);
        this.render();
        return true;
    }

    remove(val) {
        const idx = this.items.indexOf(val);
        if (idx === -1) return false;
        this.items.splice(idx, 1);
        this.render();
        return true;
    }

    reset() {
        this.items = [];
        this.render();
    }

    size() { return this.items.length; }
}

const HASH_BUCKETS = 7;

class HashMapVisualizer {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.buckets = Array.from({ length: HASH_BUCKETS }, () => []);
        this.highlightBucket = -1;
        this.highlightKey = null;
        this.render();
    }

    hashKey(key) {
        let h = 0;
        for (let i = 0; i < key.length; i++) h += key.charCodeAt(i);
        return h % HASH_BUCKETS;
    }

    put(key, value) {
        const b = this.hashKey(key);
        const chain = this.buckets[b];
        const idx = chain.findIndex(([k]) => k === key);
        if (idx >= 0) chain[idx][1] = value;
        else chain.push([key, value]);
        this.highlightBucket = b;
        this.highlightKey = key;
        this.render();
        return b;
    }

    get(key) {
        const b = this.hashKey(key);
        this.highlightBucket = b;
        this.highlightKey = key;
        this.render();
        const entry = this.buckets[b].find(([k]) => k === key);
        return entry ? entry[1] : null;
    }

    reset() {
        this.buckets = Array.from({ length: HASH_BUCKETS }, () => []);
        this.highlightBucket = -1;
        this.highlightKey = null;
        this.render();
    }

    render() {
        this.container.innerHTML = '';
        const row = document.createElement('div');
        row.className = 'ds-hash-row';
        this.buckets.forEach((chain, bi) => {
            const bucket = document.createElement('div');
            bucket.className = 'ds-hash-bucket' + (bi === this.highlightBucket ? ' is-active' : '');
            const label = document.createElement('div');
            label.className = 'ds-hash-bucket-label';
            label.textContent = String(bi);
            bucket.appendChild(label);
            const chainEl = document.createElement('div');
            chainEl.className = 'ds-hash-chain';
            if (chain.length === 0) {
                const empty = document.createElement('span');
                empty.className = 'ds-hash-empty';
                empty.textContent = '—';
                chainEl.appendChild(empty);
            } else {
                chain.forEach(([k, v]) => {
                    const item = document.createElement('div');
                    item.className = 'ds-hash-chain-item' + (k === this.highlightKey ? ' is-hit' : '');
                    item.textContent = k + ': ' + v;
                    chainEl.appendChild(item);
                });
            }
            bucket.appendChild(chainEl);
            row.appendChild(bucket);
        });
        this.container.appendChild(row);
    }
}

/* -------------------------------------------------------------------------
   PATHFINDING (BFS / A*) — tree + grid, not the 1D bar Visualizer
   ------------------------------------------------------------------------- */
const PATH_ROWS = 8;
const PATH_COLS = 10;

function pathSleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function neighbors4(r, c) {
    return [[r - 1, c], [r + 1, c], [r, c - 1], [r, c + 1]];
}

function cellKey(r, c) {
    return r + ',' + c;
}

function manhattan(r, c, gr, gc) {
    return Math.abs(r - gr) + Math.abs(c - gc);
}

function reconstruct(parent, goalKey) {
    const path = [];
    let cur = goalKey;
    while (cur !== undefined && cur !== null) {
        path.push(cur);
        cur = parent[cur];
    }
    path.reverse();
    return path;
}

function mazeHasPath(maze) {
    const [sr, sc] = maze.start;
    const [gr, gc] = maze.goal;
    const q = [[sr, sc]];
    const seen = new Set([cellKey(sr, sc)]);
    while (q.length) {
        const [r, c] = q.shift();
        if (r === gr && c === gc) return true;
        for (const [nr, nc] of neighbors4(r, c)) {
            if (nr < 0 || nc < 0 || nr >= maze.rows || nc >= maze.cols) continue;
            const k = cellKey(nr, nc);
            if (maze.walls.has(k) || seen.has(k)) continue;
            seen.add(k);
            q.push([nr, nc]);
        }
    }
    return false;
}

function generateMaze(rows, cols) {
    const start = [0, 0];
    const goal = [rows - 1, cols - 1];
    for (let attempt = 0; attempt < 50; attempt++) {
        const walls = new Set();
        const nWalls = Math.floor(rows * cols * 0.22);
        while (walls.size < nWalls) {
            const r = Math.floor(Math.random() * rows);
            const c = Math.floor(Math.random() * cols);
            if ((r === start[0] && c === start[1]) || (r === goal[0] && c === goal[1])) continue;
            walls.add(cellKey(r, c));
        }
        const maze = { rows, cols, start, goal, walls };
        if (mazeHasPath(maze)) return maze;
    }
    return { rows, cols, start, goal, walls: new Set() };
}

let sharedMaze = generateMaze(PATH_ROWS, PATH_COLS);
const mazeWatchers = [];

function subscribeMaze(fn) {
    mazeWatchers.push(fn);
}

function resetSharedMaze() {
    sharedMaze = generateMaze(PATH_ROWS, PATH_COLS);
    mazeWatchers.forEach(fn => fn());
}

function generateTree() {
    const children = {
        A: ['B', 'C'],
        B: ['D', 'E'],
        C: ['F', 'G'],
        D: [],
        E: [],
        F: [],
        G: []
    };
    const extras = [['D', 'H'], ['E', 'I'], ['F', 'J']];
    extras.forEach(([p, kid]) => {
        if (Math.random() < 0.45) {
            children[p] = children[p].concat(kid);
            children[kid] = [];
        }
    });
    const ids = Object.keys(children);
    const goal = ids.filter(id => id !== 'A')[Math.floor(Math.random() * (ids.length - 1))];
    const depth = { A: 0 };
    const q = ['A'];
    while (q.length) {
        const n = q.shift();
        (children[n] || []).forEach(ch => {
            depth[ch] = depth[n] + 1;
            q.push(ch);
        });
    }
    const levels = [];
    ids.forEach(id => {
        const d = depth[id];
        if (!levels[d]) levels[d] = [];
        levels[d].push(id);
    });
    return { children, root: 'A', goal, depth, levels };
}

class TreeSearchVisualizer {
    constructor(canvasId, mode) {
        this.container = document.getElementById(canvasId);
        this.mode = mode;
        this.delay = 280;
        this.isSorting = false;
        this.paint = {};
        this.scores = {};
        this.tree = generateTree();
        this.render();
    }

    newTree() {
        this.isSorting = false;
        this.tree = generateTree();
        this.paint = {};
        this.scores = {};
        this.render();
    }

    resetPaint() {
        this.paint = {};
        this.scores = {};
        this.render();
    }

    render() {
        if (!this.container) return;
        this.container.replaceChildren();
        this.container.classList.add('path-tree');
        this.tree.levels.forEach((level, li) => {
            const row = document.createElement('div');
            row.className = 'path-tree-level';
            if (li > 0) {
                const connector = document.createElement('div');
                connector.className = 'path-tree-connectors';
                connector.setAttribute('aria-hidden', 'true');
                this.container.appendChild(connector);
            }
            level.forEach(id => {
                const node = document.createElement('div');
                node.className = 'path-node';
                node.dataset.id = id;
                const state = this.paint[id];
                if (state) node.classList.add('path-node--' + state);
                if (id === this.tree.root) node.classList.add('path-node--start');
                if (id === this.tree.goal) node.classList.add('path-node--goal');
                const label = document.createElement('span');
                label.className = 'path-node-id';
                label.textContent = id;
                node.appendChild(label);
                const sc = this.scores[id];
                if (sc && this.mode === 'astar') {
                    const meta = document.createElement('span');
                    meta.className = 'path-node-meta';
                    meta.textContent = 'g' + sc.g + ' h' + sc.h + ' f' + sc.f;
                    node.appendChild(meta);
                }
                row.appendChild(node);
            });
            this.container.appendChild(row);
        });
    }

    setNode(id, state, score) {
        this.paint[id] = state;
        if (score) this.scores[id] = score;
        this.render();
    }

    async findPath(statusEl) {
        if (this.isSorting) return;
        this.isSorting = true;
        this.paint = {};
        this.scores = {};
        const ok = this.mode === 'astar'
            ? await this.runAstar(statusEl)
            : await this.runBfs(statusEl);
        this.isSorting = false;
        return ok;
    }

    h(id) {
        return Math.abs(this.tree.depth[this.tree.goal] - this.tree.depth[id]);
    }

    async runBfs(statusEl) {
        const { children, root, goal } = this.tree;
        const queue = [root];
        const visited = new Set([root]);
        const parent = { [root]: null };
        setStatus(statusEl, 'Queue: ' + root);
        this.setNode(root, 'frontier');
        await pathSleep(this.delay);
        if (!this.isSorting) return false;
        while (queue.length) {
            const node = queue.shift();
            this.setNode(node, 'visited');
            setStatus(statusEl, 'Visiting ' + node + (queue.length ? ' | queue: ' + queue.join(', ') : ''));
            await pathSleep(this.delay);
            if (!this.isSorting) return false;
            if (node === goal) {
                const path = reconstruct(parent, goal);
                path.forEach(id => { this.paint[id] = 'path'; });
                this.render();
                setStatus(statusEl, 'Path: ' + path.join(' → ') + ' (' + (path.length - 1) + ' hops)');
                return true;
            }
            (children[node] || []).forEach(ch => {
                if (!visited.has(ch)) {
                    visited.add(ch);
                    parent[ch] = node;
                    queue.push(ch);
                    this.paint[ch] = 'frontier';
                }
            });
            this.render();
        }
        setStatus(statusEl, 'No path — the queue emptied.');
        return false;
    }

    async runAstar(statusEl) {
        const { children, root, goal } = this.tree;
        const gScore = { [root]: 0 };
        const parent = { [root]: null };
        // simplification: scan the open list (tiny tree); Python snippet uses heapq
        const open = [root];
        const openSet = new Set([root]);
        this.scores[root] = { g: 0, h: this.h(root), f: this.h(root) };
        this.setNode(root, 'frontier', this.scores[root]);
        setStatus(statusEl, 'Open: ' + root + ' f=' + this.scores[root].f);
        await pathSleep(this.delay);
        if (!this.isSorting) return false;
        while (open.length) {
            let bestI = 0;
            for (let i = 1; i < open.length; i++) {
                if (this.scores[open[i]].f < this.scores[open[bestI]].f) bestI = i;
            }
            const node = open.splice(bestI, 1)[0];
            openSet.delete(node);
            this.setNode(node, 'visited', this.scores[node]);
            setStatus(statusEl, 'Expand ' + node + ' (f=' + this.scores[node].f + ')');
            await pathSleep(this.delay);
            if (!this.isSorting) return false;
            if (node === goal) {
                const path = reconstruct(parent, goal);
                path.forEach(id => { this.paint[id] = 'path'; });
                this.render();
                setStatus(statusEl, 'Path: ' + path.join(' → ') + ' | goal popped with f=' + this.scores[goal].f);
                return true;
            }
            (children[node] || []).forEach(ch => {
                const g2 = gScore[node] + 1;
                if (gScore[ch] === undefined || g2 < gScore[ch]) {
                    gScore[ch] = g2;
                    parent[ch] = node;
                    const h = this.h(ch);
                    this.scores[ch] = { g: g2, h, f: g2 + h };
                    if (!openSet.has(ch)) {
                        open.push(ch);
                        openSet.add(ch);
                    }
                    this.paint[ch] = 'frontier';
                }
            });
            this.render();
        }
        setStatus(statusEl, 'No path — the open set emptied.');
        return false;
    }
}

class GridSearchVisualizer {
    constructor(canvasId, mode) {
        this.container = document.getElementById(canvasId);
        this.mode = mode;
        this.delay = 55;
        this.isSorting = false;
        this.paint = {};
        this.scores = {};
        subscribeMaze(() => {
            this.isSorting = false;
            this.paint = {};
            this.scores = {};
            this.render();
        });
        this.render();
    }

    render() {
        if (!this.container) return;
        const maze = sharedMaze;
        this.container.replaceChildren();
        this.container.classList.add('path-grid');
        this.container.style.gridTemplateColumns = 'repeat(' + maze.cols + ', 1fr)';
        for (let r = 0; r < maze.rows; r++) {
            for (let c = 0; c < maze.cols; c++) {
                const k = cellKey(r, c);
                const cell = document.createElement('div');
                cell.className = 'path-cell';
                if (maze.walls.has(k)) cell.classList.add('path-cell--wall');
                const state = this.paint[k];
                if (state) cell.classList.add('path-cell--' + state);
                if (r === maze.start[0] && c === maze.start[1]) cell.classList.add('path-cell--start');
                if (r === maze.goal[0] && c === maze.goal[1]) cell.classList.add('path-cell--goal');
                const sc = this.scores[k];
                if (sc && this.mode === 'astar' && !maze.walls.has(k)) {
                    const meta = document.createElement('span');
                    meta.className = 'path-cell-meta';
                    meta.textContent = sc.f;
                    cell.appendChild(meta);
                }
                this.container.appendChild(cell);
            }
        }
    }

    async findPath(statusEl) {
        if (this.isSorting) return;
        this.isSorting = true;
        this.paint = {};
        this.scores = {};
        const ok = this.mode === 'astar'
            ? await this.runAstar(statusEl)
            : await this.runBfs(statusEl);
        this.isSorting = false;
        return ok;
    }

    async runBfs(statusEl) {
        const maze = sharedMaze;
        const [sr, sc] = maze.start;
        const [gr, gc] = maze.goal;
        const startK = cellKey(sr, sc);
        const goalK = cellKey(gr, gc);
        const queue = [[sr, sc]];
        const visited = new Set([startK]);
        const parent = { [startK]: null };
        let expanded = 0;
        this.paint[startK] = 'frontier';
        this.render();
        setStatus(statusEl, 'Ripple from start…');
        await pathSleep(this.delay);
        if (!this.isSorting) return false;
        while (queue.length) {
            const [r, c] = queue.shift();
            const k = cellKey(r, c);
            expanded += 1;
            this.paint[k] = 'visited';
            if (r === gr && c === gc) {
                const path = reconstruct(parent, goalK);
                path.forEach(pk => { this.paint[pk] = 'path'; });
                this.render();
                setStatus(statusEl, 'Path ' + (path.length - 1) + ' steps | visited ' + expanded + ' cells');
                return true;
            }
            for (const [nr, nc] of neighbors4(r, c)) {
                if (nr < 0 || nc < 0 || nr >= maze.rows || nc >= maze.cols) continue;
                const nk = cellKey(nr, nc);
                if (maze.walls.has(nk) || visited.has(nk)) continue;
                visited.add(nk);
                parent[nk] = k;
                queue.push([nr, nc]);
                this.paint[nk] = 'frontier';
            }
            this.render();
            setStatus(statusEl, 'Visiting (' + r + ',' + c + ') | frontier ' + queue.length);
            await pathSleep(this.delay);
            if (!this.isSorting) return false;
        }
        setStatus(statusEl, 'No path — walls boxed the start in.');
        return false;
    }

    async runAstar(statusEl) {
        const maze = sharedMaze;
        const [sr, sc] = maze.start;
        const [gr, gc] = maze.goal;
        const startK = cellKey(sr, sc);
        const goalK = cellKey(gr, gc);
        const gScore = { [startK]: 0 };
        const parent = { [startK]: null };
        const open = [[sr, sc]];
        const openSet = new Set([startK]);
        this.scores[startK] = { g: 0, h: manhattan(sr, sc, gr, gc), f: manhattan(sr, sc, gr, gc) };
        this.paint[startK] = 'frontier';
        this.render();
        setStatus(statusEl, 'Open start f=' + this.scores[startK].f);
        await pathSleep(this.delay);
        if (!this.isSorting) return false;
        let expanded = 0;
        while (open.length) {
            let bestI = 0;
            for (let i = 1; i < open.length; i++) {
                const a = cellKey(open[i][0], open[i][1]);
                const b = cellKey(open[bestI][0], open[bestI][1]);
                if (this.scores[a].f < this.scores[b].f) bestI = i;
            }
            const [r, c] = open.splice(bestI, 1)[0];
            const k = cellKey(r, c);
            openSet.delete(k);
            expanded += 1;
            this.paint[k] = 'visited';
            if (r === gr && c === gc) {
                const path = reconstruct(parent, goalK);
                path.forEach(pk => { this.paint[pk] = 'path'; });
                this.render();
                setStatus(statusEl, 'Path ' + (path.length - 1) + ' steps | expanded ' + expanded + ' cells');
                return true;
            }
            for (const [nr, nc] of neighbors4(r, c)) {
                if (nr < 0 || nc < 0 || nr >= maze.rows || nc >= maze.cols) continue;
                const nk = cellKey(nr, nc);
                if (maze.walls.has(nk)) continue;
                const g2 = gScore[k] + 1;
                if (gScore[nk] === undefined || g2 < gScore[nk]) {
                    gScore[nk] = g2;
                    parent[nk] = k;
                    const h = manhattan(nr, nc, gr, gc);
                    this.scores[nk] = { g: g2, h, f: g2 + h };
                    if (!openSet.has(nk)) {
                        open.push([nr, nc]);
                        openSet.add(nk);
                    }
                    this.paint[nk] = 'frontier';
                }
            }
            this.render();
            setStatus(statusEl, 'Pop (' + r + ',' + c + ') f=' + this.scores[k].f);
            await pathSleep(this.delay);
            if (!this.isSorting) return false;
        }
        setStatus(statusEl, 'No path — the open set emptied.');
        return false;
    }
}

function bindPathControls(viz, runId, resetId, statusId, isGrid) {
    const statusEl = document.getElementById(statusId);
    document.getElementById(runId).addEventListener('click', () => viz.findPath(statusEl));
    document.getElementById(resetId).addEventListener('click', () => {
        viz.isSorting = false;
        if (isGrid) {
            resetSharedMaze();
        } else {
            viz.newTree();
        }
        setStatus(statusEl, '');
    });
}

/* -------------------------------------------------------------------------
   4. QUIZ LOGIC
   ------------------------------------------------------------------------- */
const quizQuestions = [
    {
        q: "Which search algorithm requires the array to be perfectly sorted first?",
        opts: ["Linear Search", "Binary Search", "Both require it"],
        ans: 1,
        reason: "Binary Search relies on jumping to the middle and eliminating halves based on values being > or <. This logic ONLY works if the array is already sorted!"
    },
    {
        q: "In Bubble Sort, why does the inner loop condition use `n - i - 1`?",
        opts: ["To prevent an Index Out of Bounds error when checking neighbors", "Because the biggest items have already 'bubbled' to the end", "To make it run faster by skipping random elements"],
        ans: 1,
        reason: "After every pass (i), the absolute largest remaining element 'bubbles' to the end of the unsorted section. We don't need to re-check elements we already successfully placed at the end."
    },
    {
        q: "Which sorting algorithm acts like a 'boss', picking a Pivot and making everyone else stand to the left or right of it?",
        opts: ["Selection Sort", "Bubble Sort", "Quick Sort"],
        ans: 2,
        reason: "Quick Sort revolves entirely around the 'Pivot'. Elements smaller go left, elements bigger go right. Then it calls itself (recurses) on the left and right squads."
    },
    {
        q: "If an array has 1 million items, what's the absolute worst-case scenario for Linear Search?",
        opts: ["It checks about 20 items", "It checks exactly 1 million items", "It checks 500,000 items"],
        ans: 1,
        reason: "In the worst-case scenario (the target is the very last item, or doesn't exist at all), Linear Search must inspect every single item one by one. That's 1 million checks!"
    },
    {
        q: "What is the time complexity of Binary Search?",
        opts: ["O(n)", "O(log n)", "O(n²)"],
        ans: 1,
        reason: "Binary Search eliminates half the remaining elements at every step. For a list of 1,000 items, it checks only about 10 — extremely efficient."
    },
    {
        q: "In Selection Sort, what does the variable `min_idx` track?",
        opts: ["The current item being swapped", "The index of the smallest item found so far in the unsorted portion", "The last sorted position"],
        ans: 1,
        reason: "`min_idx` stores the index of the smallest element found during the inner scan. After the inner loop completes, we swap this minimum with the current position `i`."
    },
    {
        q: "What makes Quick Sort faster than Bubble Sort on large datasets?",
        opts: ["Quick Sort uses nested loops", "Quick Sort divides the array recursively, processing O(log n) levels of O(n) work", "Quick Sort never swaps elements"],
        ans: 1,
        reason: "Quick Sort repeatedly splits the array in half (like Binary Search), so for 1,000 items it only does about 10 rounds of work. Bubble Sort compares every pair over and over — roughly 500,000 comparisons — making it much slower."
    },
    {
        q: "You can only remove the item you added most recently. Which data structure is this?",
        opts: ["Queue", "Stack", "Linked List"],
        ans: 1,
        reason: "That's LIFO — Last In, First Out — which is exactly how a Stack behaves. Think of a stack of plates: you always take from the top."
    },
    {
        q: "Why is inserting a new item at the front of a Linked List O(1), while inserting at the front of a Python list is O(n)?",
        opts: ["Linked Lists are always shorter", "A Linked List just points the new node at the old head — nothing else moves. A Python list has to shift every existing item over by one.", "Python lists don't support inserting at the front"],
        ans: 1,
        reason: "A Linked List only needs to update a couple of pointers, regardless of size. A Python list stores items in one contiguous block, so inserting at position 0 means physically shifting every other item — that's O(n)."
    },
    {
        q: "A queue built on a plain Python list uses `list.append()` for enqueue and `list.pop(0)` for dequeue. What's the catch?",
        opts: ["There is no catch — both are O(1)", "enqueue() is O(1), but dequeue() is O(n) because pop(0) has to shift every remaining item down", "Both operations are O(n)"],
        ans: 1,
        reason: "append() adds to the end in O(1). But pop(0) removes the first item, so Python has to shift every remaining item one slot to the left — that's O(n). collections.deque avoids this by staying O(1) on both ends."
    },
    {
        q: "BFS uses a queue, not a stack. Why?",
        opts: [
            "A stack is slower in Python",
            "A queue is FIFO, so closer nodes finish first (fewest hops). A stack would dive deep (DFS) and can wander down a long corridor.",
            "Queues work only on grids, stacks only on trees"
        ],
        ans: 1,
        reason: "BFS is the ripple: whoever has been waiting longest (arrived first) is expanded next. That is FIFO — a queue. A stack would be last-in-first-out and become depth-first search."
    },
    {
        q: "On an unweighted grid (every step costs 1), when BFS first reaches the goal, what is guaranteed?",
        opts: [
            "The path has the fewest steps possible",
            "The path has the fewest kilometers on a real map",
            "You have visited every cell"
        ],
        ans: 0,
        reason: "Every cheaper cell was already processed before you touch a farther one. That is hops, not kilometers — unequal road lengths need a weighted algorithm."
    },
    {
        q: "In A*, what does f = g + h mean?",
        opts: [
            "f is the number of walls, g is rows, h is columns",
            "g is cost so far from the start, h is a guess of leftover cost, f is the priority used to pick who to expand next",
            "g is the goal, h is the heuristic, f is always zero"
        ],
        ans: 1,
        reason: "A* always pops the open node with smallest f. If h never overestimates, the first time the goal is popped you still have an optimal path."
    },
    {
        q: "A heuristic is admissible when it…",
        opts: [
            "Always overestimates leftover cost so A* finishes faster",
            "Never overestimates leftover cost (it may guess low or exact)",
            "Must be exactly equal to the true remaining cost"
        ],
        ans: 1,
        reason: "If h lies high, A* can skip a cheap path. Manhattan distance on a 4-way grid never overestimates step count, so it is admissible. h = 0 is also admissible — then A* behaves like Dijkstra / BFS on equal costs."
    },
    {
        q: "You have an unsorted shopping cart of 12 items. You need to know if milk is in it, once. What do you use?",
        opts: ["Binary Search", "Linear Search", "A*"],
        ans: 1,
        reason: "The cart is messy and you search once. Linear Search is the honest walk. Binary Search would be wrong unless you sort first — which is extra work for one lookup."
    },
    {
        q: "You already learned a fair waiting line. Which algorithm uses that line so closer map cells finish first?",
        opts: ["Bubble Sort", "Binary Search", "BFS"],
        ans: 2,
        reason: "BFS is the ripple: a queue (FIFO) expands close cells before far ones. That is why Queue is taught before BFS on this page."
    },
    {
        q: "You split [4, 1, 3, 2] into [4, 1] and [3, 2]. Both halves are sorted. What is the next merge step?",
        opts: ["Pick a new pivot", "Merge the two sorted halves into one sorted list", "Bubble the largest to the end"],
        ans: 1,
        reason: "Merge Sort always splits until pieces are size 1, sorts each half recursively, then merges sorted halves by taking the smaller front item."
    },
    {
        q: "Two different keys land in the same hash bucket. What handles that?",
        opts: ["Binary Search on the bucket", "A chain (small linked list) in that bucket", "The stack"],
        ans: 1,
        reason: "When keys collide, each bucket keeps a chain. You walk the chain until the key matches — that is why you learned linked lists."
    }
];

let score = 0;
let quizMissed = [];

function reviewTarget(q) {
    const t = q.q.toLowerCase();
    if (t.includes('bfs') || t.includes('queue, not a stack') || t.includes('unweighted grid')) return ['#bfs', 'BFS'];
    if (t.includes('a*') || t.includes('heuristic') || t.includes('f = g')) return ['#astar', 'A*'];
    if (t.includes('binary')) return ['#binary-search', 'Binary Search'];
    if (t.includes('linear')) return ['#linear-search', 'Linear Search'];
    if (t.includes('bubble')) return ['#bubble-sort', 'Bubble Sort'];
    if (t.includes('selection') || t.includes('min_idx')) return ['#selection-sort', 'Selection Sort'];
    if (t.includes('quick') || t.includes('pivot') && t.includes('boss') || t.includes('pivot')) return ['#quick-sort', 'Quick Sort'];
    if (t.includes('merge') || t.includes('sorted halves')) return ['#merge-sort', 'Merge Sort'];
    if (t.includes('hash') || t.includes('bucket') || t.includes('collision')) return ['#hash-map', 'Hash Map'];
    if (t.includes('most recently')) return ['#stack', 'Stack'];
    if (t.includes('linked')) return ['#linked-list', 'Linked List'];
    if (t.includes('queue') || t.includes('pop(0)')) return ['#queue', 'Queue'];
    if (t.includes('shopping') || t.includes('unsorted')) return ['#linear-search', 'Linear Search'];
    return ['#cheat-sheet', 'the cheat sheet'];
}

function buildQuiz() {
    const container = document.getElementById('quiz-container');
    container.replaceChildren();

    quizQuestions.forEach((item, qIdx) => {
        const card = document.createElement('div');
        card.className = `quiz-card${qIdx === 0 ? ' active' : ''}`;
        card.id = `q-card-${qIdx}`;

        const progress = document.createElement('div');
        progress.className = 'quiz-progress';
        progress.textContent = `Question ${qIdx + 1} of ${quizQuestions.length}`;

        const heading = document.createElement('h3');
        heading.textContent = item.q;

        const optsWrap = document.createElement('div');
        optsWrap.className = 'quiz-options';
        optsWrap.id = `opts-${qIdx}`;

        item.opts.forEach((opt, optIdx) => {
            const optEl = document.createElement('div');
            optEl.className = 'quiz-opt';
            optEl.setAttribute('role', 'button');
            optEl.tabIndex = 0;
            optEl.textContent = opt;
            optEl.addEventListener('click', () => selectAnswer(qIdx, optIdx));
            optEl.addEventListener('keydown', (event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    selectAnswer(qIdx, optIdx);
                }
            });
            optsWrap.appendChild(optEl);
        });

        const feedback = document.createElement('div');
        feedback.id = `feedback-${qIdx}`;
        feedback.className = 'quiz-feedback';

        const nav = document.createElement('div');
        nav.className = 'quiz-nav';
        const nextBtn = document.createElement('button');
        nextBtn.className = 'btn btn-secondary quiz-nav-btn';
        nextBtn.id = `next-btn-${qIdx}`;
        nextBtn.textContent = 'Next Question \u2192';
        nextBtn.addEventListener('click', () => nextQuestion(qIdx));
        nav.appendChild(nextBtn);

        card.append(progress, heading, optsWrap, feedback, nav);
        container.appendChild(card);
    });

    const resCard = document.createElement('div');
    resCard.className = 'quiz-card';
    resCard.id = 'q-card-results';

    const resInner = document.createElement('div');
    resInner.className = 'quiz-results';

    const scoreEl = document.createElement('h2');
    scoreEl.className = 'quiz-score';
    scoreEl.id = 'final-score-text';
    scoreEl.textContent = `0/${quizQuestions.length}`;

    const doneTitle = document.createElement('h3');
    doneTitle.className = 'quiz-done-title';
    doneTitle.textContent = 'Quiz Complete!';

    const doneMsg = document.createElement('p');
    doneMsg.id = 'final-message';
    doneMsg.className = 'quiz-done-msg';
    doneMsg.textContent = "Let's see how you did.";

    const again = document.createElement('button');
    again.className = 'btn btn-primary';
    again.textContent = 'Take it again';
    again.addEventListener('click', resetQuiz);

    resInner.append(scoreEl, doneTitle, doneMsg, again);
    resCard.appendChild(resInner);
    container.appendChild(resCard);
}

function selectAnswer(qIdx, selectedOptIdx) {
    const optsContainer = document.getElementById(`opts-${qIdx}`);
    const options = optsContainer.querySelectorAll('.quiz-opt');
    const feedback = document.getElementById(`feedback-${qIdx}`);
    const nextBtn = document.getElementById(`next-btn-${qIdx}`);
    const correctOptIdx = quizQuestions[qIdx].ans;

    options.forEach((opt) => {
        opt.setAttribute('aria-disabled', 'true');
        opt.tabIndex = -1;
    });

    const mark = document.createElement('strong');
    if (selectedOptIdx === correctOptIdx) {
        options[selectedOptIdx].classList.add('correct');
        mark.className = 'quiz-mark-ok';
        mark.textContent = 'Correct! 🎯';
        score++;
    } else {
        options[selectedOptIdx].classList.add('wrong');
        options[correctOptIdx].classList.add('correct');
        mark.className = 'quiz-mark-bad';
        mark.textContent = 'Incorrect. ❌';
        const [href, label] = reviewTarget(quizQuestions[qIdx]);
        quizMissed.push({ href, label });
    }
    feedback.replaceChildren(mark, document.createElement('br'), document.createTextNode(quizQuestions[qIdx].reason));
    feedback.classList.add('is-visible');

    nextBtn.classList.add('is-visible');
    if (qIdx === quizQuestions.length - 1) {
        nextBtn.textContent = 'View Results';
    }
}

function nextQuestion(currentIdx) {
    document.getElementById(`q-card-${currentIdx}`).classList.remove('active');
    if (currentIdx < quizQuestions.length - 1) {
        document.getElementById(`q-card-${currentIdx + 1}`).classList.add('active');
    } else {
        showResults();
    }
}

function showResults() {
    document.getElementById('q-card-results').classList.add('active');
    document.getElementById('final-score-text').textContent = `${score}/${quizQuestions.length}`;

    const msgEl = document.getElementById('final-message');
    if (score === quizQuestions.length) msgEl.textContent = "Perfect score! You've got a solid grasp of these algorithms.";
    else if (score >= quizQuestions.length / 2) msgEl.textContent = "Good effort! A quick review of the flowcharts will get you to 100%.";
    else msgEl.textContent = "Don't worry — go back through the lessons step by step and try again.";
    const seen = new Set();
    quizMissed.forEach(({ href, label }) => {
        if (seen.has(href)) return;
        seen.add(href);
        const a = document.createElement('a');
        a.href = href;
        a.textContent = 'Review ' + label;
        a.style.display = 'block';
        a.style.marginTop = '0.5rem';
        msgEl.appendChild(document.createElement('br'));
        msgEl.appendChild(a);
    });
}

function resetQuiz() {
    score = 0;
    quizMissed = [];
    buildQuiz();
}

buildQuiz();

/* -------------------------------------------------------------------------
   5. EMBEDDED CHECKPOINTS
   ------------------------------------------------------------------------- */
const checkpointData = {
    'linear-search': [
        {
            q: "What does linear search return if the target is not in the array?",
            opts: ["0", "-1", "The array length", "None"],
            ans: 1,
            explanation: "-1 is the standard 'not found' convention — it's an invalid index that can't be confused with a real position."
        },
        {
            q: "How many comparisons does linear search make in the worst case for an array of size n?",
            opts: ["1", "n/2", "n", "log n"],
            ans: 2,
            explanation: "Linear search may need to check every single element — all n items — in the worst case."
        },
        {
            q: "The list is [8, 3, 11]. You search for 3. After looking at 8, what is next?",
            opts: ["Give up", "Look at 3 (the next item)", "Jump to the middle"],
            ans: 1,
            explanation: "Linear Search never jumps. Next is the next shelf slot."
        },
        {
            q: "The list is empty. What should Linear Search return?",
            opts: ["0", "-1", "The first item"],
            ans: 1,
            explanation: "There is nothing to check, so the answer is not found: -1."
        },
        {
            q: "The list is [4, 7, 4]. You search for 4. Which index comes back?",
            opts: ["0 (the first 4)", "2 (the last 4)", "Both 0 and 2"],
            ans: 0,
            explanation: "Linear Search stops at the first match. Index 0 is 4, so it never looks at the later 4."
        }
    ],
    'binary-search': [
        {
            q: "What must be true about the array before you can run binary search?",
            opts: ["It must be small", "It must be sorted", "It must contain only positive numbers", "It must not have duplicates"],
            ans: 1,
            explanation: "Binary search works by eliminating halves based on comparisons. This only works if the array is sorted."
        },
        {
            q: "After one step of binary search on an array of 100 items, how many items remain to check?",
            opts: ["99", "50", "25", "It depends on the target"],
            ans: 1,
            explanation: "Binary search eliminates half the search space every step. Starting with 100, you're left with roughly 50."
        },
        {
            q: "What is the time complexity of binary search?",
            opts: ["O(n)", "O(log n)", "O(n²)", "O(1)"],
            ans: 1,
            explanation: "Binary search eliminates half the remaining elements each step, so it runs in O(log n) time — 'log' just means repeated halving."
        },
        {
            q: "The visualizer greys out bars. What do they mean?",
            opts: ["They are walls", "That half cannot hold the target (if the list is sorted)", "They were already found"],
            ans: 1,
            explanation: "Each step throws away a half. Grey = discarded. That is only safe on a sorted list."
        },
        {
            q: "List is [9, 1, 4] (unsorted). Should you Binary Search for 9?",
            opts: ["Yes, Binary is always faster", "No — it can throw 9 away and lie. Use Linear Search.", "Only if 9 is in the middle"],
            ans: 1,
            explanation: "Binary Search assumes left is smaller. On a messy list that assumption is false."
        }
    ],
    bfs: [
        {
            q: "Why does BFS use a queue instead of a stack?",
            opts: ["Queues use less memory", "FIFO expands closer nodes first; a stack would search deep first", "Python forbids stacks in graphs"],
            ans: 1,
            explanation: "A queue is first-in-first-out, so everyone one hop away is finished before two hops. A stack would be depth-first."
        },
        {
            q: "On a grid where every move costs 1, the first time BFS touches the goal…",
            opts: ["The path might be longer than another unexplored route", "That path has the fewest steps", "You must keep going until the queue is empty"],
            ans: 1,
            explanation: "Closer cells are always processed first, so the first visit to the goal is fewest hops. (That is not the same as fewest kilometers if edges had different lengths.)"
        },
        {
            q: "What goes wrong if you forget the visited set?",
            opts: ["The algorithm becomes A*", "On a graph with cycles you can enqueue forever", "Parent pointers stop working"],
            ans: 1,
            explanation: "Without visited, a neighbor can send you back to a node you already queued, and a cycle never ends."
        },
        {
            q: "BFS is different from Linear Search because…",
            opts: ["BFS looks up a number in a sorted list", "BFS finds a path on a map (neighbors), not a value in a shelf", "BFS does not use a loop"],
            ans: 1,
            explanation: "Linear/Binary: is this number here? BFS: how do I walk from start to goal one handshake at a time?"
        },
        {
            q: "On the picture, 'waiting in line' cells are…",
            opts: ["Walls", "The queue — next to be checked", "The finished path only"],
            ans: 1,
            explanation: "That color is the frontier: people still waiting in the FIFO line."
        }
    ],
    astar: [
        {
            q: "What is f in A*?",
            opts: ["Only the heuristic h", "g + h (cost so far plus a guess of leftover cost)", "The number of walls"],
            ans: 1,
            explanation: "A* pops the open node with smallest f = g + h."
        },
        {
            q: "When should A* stop?",
            opts: ["The first time the goal appears as a neighbor", "When the goal is popped from the open set (smallest f)", "After visiting every cell"],
            ans: 1,
            explanation: "Discovering the goal as a neighbor is not enough — a cheaper f might still be on the heap. Stop when the goal is popped."
        },
        {
            q: "Manhattan |dx|+|dy| is a safe h on this page because…",
            opts: ["We allow diagonal moves", "We only move N/E/S/W, so you cannot beat that many steps", "It always equals the true path length even with walls"],
            ans: 1,
            explanation: "With 4-way moves you need at least |dx|+|dy| steps. Walls only make the real path longer, never shorter than Manhattan — so h never overestimates."
        },
        {
            q: "g, h, and f in one breath?",
            opts: ["g=walls, h=rows, f=columns", "g=steps so far, h=guess left, f=g+h (smallest f goes next)", "They are three different algorithms"],
            ans: 1,
            explanation: "That is the whole scoring story. Admissible h never brags."
        },
        {
            q: "A* visiting fewer cells than BFS means…",
            opts: ["A* went to a different goal", "Typically less work, same hop-count if h is honest — not a promise on every maze", "BFS is broken"],
            ans: 1,
            explanation: "Fewer cells is usual, not guaranteed. Compare on the same maze."
        }
    ],
    'selection-sort': [
        {
            q: "What does the inner loop in selection sort do?",
            opts: ["Swaps adjacent elements", "Finds the index of the smallest remaining element", "Moves the pivot into place", "Checks if the array is sorted"],
            ans: 1,
            explanation: "The inner loop scans the unsorted portion to find the index of the minimum element (min_idx)."
        },
        {
            q: "How many swaps does selection sort make for an array of n elements?",
            opts: ["n", "n²", "n-1", "n/2"],
            ans: 2,
            explanation: "Selection sort swaps exactly once per outer loop iteration — at most n-1 swaps total."
        },
        {
            q: "On the picture, green bars on the left mean…",
            opts: ["They are still being compared", "Those seats are finished (smallest values locked in)", "They are the pivot"],
            ans: 1,
            explanation: "Each pass locks one more value on the left. Green = done."
        },
        {
            q: "Selection vs Bubble in one line?",
            opts: ["Selection swaps neighbors all the time; Bubble swaps once", "Selection looks far then swaps once; Bubble swaps neighbors", "They are identical"],
            ans: 1,
            explanation: "Selection scans for the smallest remaining, then one swap. Bubble only compares neighbors."
        }
    ],
    'bubble-sort': [
        {
            q: "Why does the inner loop in bubble sort use `n - i - 1`?",
            opts: ["To prevent index out of bounds", "The last i elements are already in their final position", "To make it run at half speed", "Because Python indexing starts at 0"],
            ans: 1,
            explanation: "After each pass, the largest remaining element 'bubbles' to the end. We skip those already-sorted elements."
        },
        {
            q: "What optimization can bubble sort use to detect an already-sorted array early?",
            opts: ["Count the number of passes", "Track whether any swaps were made in a pass", "Check if the first element is the smallest", "Use binary search to verify"],
            ans: 1,
            explanation: "If a complete pass makes zero swaps, every element is in order and the algorithm can stop early."
        },
        {
            q: "If a pass makes zero swaps, what should happen?",
            opts: ["Keep going for n more passes", "Stop — the list is already in order", "Restart from the left"],
            ans: 1,
            explanation: "No swaps means every neighbor pair was already correct. The visualizer stops too."
        },
        {
            q: "Bubble Sort is mainly on this page because…",
            opts: ["It is the fastest sort in Python", "It is easy to trace by hand, even if production code uses something faster", "It needs a sorted list"],
            ans: 1,
            explanation: "Python's sorted() is much faster. We keep Bubble because you can watch neighbors swap."
        }
    ],
    'quick-sort': [
        {
            q: "What is the pivot in quick sort?",
            opts: ["The smallest element", "The element used to partition the array", "The middle index", "The final sorted position"],
            ans: 1,
            explanation: "The pivot is a reference value. Elements smaller go left, larger go right. After partitioning, the pivot is in its final position."
        },
        {
            q: "Why does quick sort call itself after partitioning?",
            opts: ["To swap elements again", "To recursively sort the left and right partitions", "To find a new pivot", "To merge the sorted halves"],
            ans: 1,
            explanation: "After the pivot is placed, quick sort recursively sorts the sub-arrays on both sides using the same strategy."
        },
        {
            q: "What is the best-case time complexity of quick sort?",
            opts: ["O(n)", "O(log n)", "O(n log n)", "O(n²)"],
            ans: 2,
            explanation: "In the best case, each partition splits the array roughly in half, giving O(log n) levels of O(n) work = O(n log n)."
        },
        {
            q: "When does Quick Sort stop calling itself on a piece?",
            opts: ["After 10 calls", "When that piece has 0 or 1 item (already sorted)", "When it finds the smallest number"],
            ans: 1,
            explanation: "That tiny piece is the base case — the reason recursion does not run forever."
        },
        {
            q: "If recursion still feels foggy, what should you do?",
            opts: ["Skip to A*", "Re-read the Recursion bridge just above Quick Sort", "Use Binary Search to sort"],
            ans: 1,
            explanation: "The bridge is the plain-English version of 'call the same recipe on a smaller leftover.'"
        }
    ],
    'stack': [
        {
            q: "What does LIFO stand for?",
            opts: ["Last In, First Out", "Look In, Find Out", "Loop In, For Out", "Least Important, First Out"],
            ans: 0,
            explanation: "LIFO = Last In, First Out. The most recently added item is the first one you can remove — like a stack of plates."
        },
        {
            q: "Which operation removes the top item from a stack?",
            opts: ["Push", "Pop", "Peek", "Is_Empty"],
            ans: 1,
            explanation: "Pop removes and returns the top item. Push adds a new item. Peek looks at the top without removing it."
        },
        {
            q: "What happens if you call Pop() on an empty stack?",
            opts: ["It returns 0", "It returns None", "It crashes the program", "It creates a new item"],
            ans: 1,
            explanation: "A well-designed stack returns None (or raises an error) when you try to pop from an empty stack — this is called an underflow."
        },
        {
            q: "On this page, class Stack means…",
            opts: ["You must pass an OOP exam first", "A labeled bundle of data plus push/pop rules — skip the theory", "A sorted list"],
            ans: 1,
            explanation: "Ten-second version: a named box of verbs. You are not taking a class-design course."
        },
        {
            q: "The visualizer says the stack is empty. What should you do?",
            opts: ["Pop anyway", "Push something first, or Reset", "Switch to Binary Search"],
            ans: 1,
            explanation: "Empty means nothing to pop. Push a number, then pop."
        }
    ],
    'queue': [
        {
            q: "What does FIFO stand for?",
            opts: ["First In, First Out", "Fast Input, Fast Output", "Find It, Forget It", "Five In, Four Out"],
            ans: 0,
            explanation: "FIFO = First In, First Out. The item that has been waiting the longest gets removed first — like a line at a coffee shop."
        },
        {
            q: "Which end of the queue does a new item join?",
            opts: ["The front", "The rear", "The middle", "It depends on the value"],
            ans: 1,
            explanation: "New items always join at the rear (back) of the queue. Items are removed from the front."
        },
        {
            q: "What's the difference between Dequeue() and Front()?",
            opts: ["They do the same thing", "Dequeue removes the front item, Front just looks at it", "Front removes the item, Dequeue just looks", "Dequeue adds an item, Front removes one"],
            ans: 1,
            explanation: "Dequeue() removes and returns the front item. Front() only looks at it — the item stays in the queue."
        },
        {
            q: "Why learn Queue before BFS?",
            opts: ["No reason", "BFS is that same fair line, walking a map", "Queues only work in sorts"],
            ans: 1,
            explanation: "Closest cells finish first because they waited longest in the line."
        },
        {
            q: "Why does the lesson warn about list.pop(0)?",
            opts: ["It is illegal in Python", "It is slow on a long list (everyone shuffles left). BFS code uses deque instead.", "It deletes the whole list"],
            ans: 1,
            explanation: "pop(0) is O(n). collections.deque is O(1) at both ends."
        }
    ],
    'linked-list': [
        {
            q: "What two things does each node in a linked list store?",
            opts: ["An index and a value", "Data and a pointer to the next node", "A key and a value", "A head and a tail"],
            ans: 1,
            explanation: "Each node stores its own data (the value) and a pointer (next) to the next node in the chain."
        },
        {
            q: "What does the 'head' of a linked list represent?",
            opts: ["The largest node", "The first node in the list", "The last node in the list", "The middle node"],
            ans: 1,
            explanation: "The head is a pointer to the very first node. If the list is empty, head is None."
        },
        {
            q: "Why is inserting at the head of a linked list O(1)?",
            opts: ["Because you don't need to shift any other elements", "Because the list is always sorted", "Because Python is fast", "O(1) is just a guess"],
            ans: 0,
            explanation: "You just create a new node, point it at the current head, and update the head — no matter how long the list is, it's always the same few steps."
        },
        {
            q: "The boxes on the right of the page are…",
            opts: ["A perfect model of RAM", "A teaching sketch — the Python really uses next pointers", "A stack"],
            ans: 1,
            explanation: "The visualizer is display-only. The snippet is the real pointer story."
        },
        {
            q: "When is a linked list nicer than a Python list?",
            opts: ["When you always need item 50 by index", "When you insert at the front a lot (no shifting everyone)", "When the list must stay sorted for Binary Search"],
            ans: 1,
            explanation: "Insert at head is a couple of arrows. A Python list must slide every later item."
        }
    ],
    'merge-sort': [
        {
            q: "What is the base case in merge sort?",
            opts: ["The list has 0 or 1 item", "The list is already sorted", "The pivot equals the middle"],
            ans: 0,
            explanation: "A single item (or empty slice) is already sorted. Recursion stops there."
        },
        {
            q: "After splitting, what happens before merging?",
            opts: ["Each half is sorted recursively", "You pick a pivot", "You swap neighbors"],
            ans: 0,
            explanation: "Merge Sort trusts that each half comes back sorted, then merge combines them."
        },
        {
            q: "Is Merge Sort stable?",
            opts: ["Yes — equal items keep their order when merging", "No — never", "Only on sorted input"],
            ans: 0,
            explanation: "When merging, taking from the left half first when values tie keeps stability."
        },
        {
            q: "Merge Sort's extra space is roughly…",
            opts: ["O(1)", "O(n) for the merge buffer", "O(n²)"],
            ans: 1,
            explanation: "Each merge copies into temporary halves. That is the trade for guaranteed O(n log n)."
        },
        {
            q: "On the picture, blue vs yellow during a split means…",
            opts: ["Left half vs right half of the current window", "Sorted vs unsorted forever", "Pivot vs non-pivot"],
            ans: 0,
            explanation: "Colors show which side of the split we are looking at before merging back."
        }
    ],
    'hash-map': [
        {
            q: "What does the hash function return?",
            opts: ["A bucket index", "The value stored", "The length of the key"],
            ans: 0,
            explanation: "Hash turns a key into a locker number: index = hash(key) % number_of_buckets."
        },
        {
            q: "Average time to get a key from a hash map is…",
            opts: ["O(1)", "O(n)", "O(log n)"],
            ans: 0,
            explanation: "With few collisions you jump straight to the bucket and maybe walk a short chain."
        },
        {
            q: "Two keys collide in the same bucket. You…",
            opts: ["Overwrite the first key silently", "Append to the bucket's chain", "Sort the whole map"],
            ans: 1,
            explanation: "Each bucket is a chain. Collisions add another link, not another bucket."
        },
        {
            q: "put(\"Ada\", 36) when \"Ada\" is already in the bucket should…",
            opts: ["Add a second Ada", "Update 36 in place", "Crash"],
            ans: 1,
            explanation: "Same key updates the value. Different keys in the same bucket share the chain."
        },
        {
            q: "Why learn hash maps after linked lists?",
            opts: ["Buckets use chains when keys collide", "Hash maps are stacks", "Python dicts are arrays only"],
            ans: 0,
            explanation: "Collision chains are tiny linked lists hanging off each bucket."
        }
    ]
};

function buildCheckpoints() {
    document.querySelectorAll('.checkpoint[data-algo]').forEach((container) => {
        const algo = container.dataset.algo;
        const questions = checkpointData[algo];
        if (!questions) return;

        const heading = document.createElement('div');
        heading.className = 'checkpoint-heading';
        heading.textContent = 'Quick Check';
        container.appendChild(heading);

        questions.forEach((q, qIdx) => {
            const qDiv = document.createElement('div');
            qDiv.className = 'check-q';

            const qText = document.createElement('div');
            qText.className = 'check-q-text';
            qText.textContent = `${qIdx + 1}. ${q.q}`;

            const optsWrap = document.createElement('div');
            optsWrap.className = 'check-opts';
            q.opts.forEach((opt, oi) => {
                const btn = document.createElement('button');
                btn.className = 'check-opt';
                btn.dataset.q = String(qIdx);
                btn.dataset.opt = String(oi);
                btn.textContent = opt;
                optsWrap.appendChild(btn);
            });

            const feedback = document.createElement('div');
            feedback.className = 'check-feedback';
            feedback.dataset.q = String(qIdx);
            feedback.textContent = q.explanation;

            qDiv.append(qText, optsWrap, feedback);
            container.appendChild(qDiv);
        });
    });

    document.querySelectorAll('.check-opt').forEach((btn) => {
        btn.addEventListener('click', function () {
            const qIdx = parseInt(this.dataset.q, 10);
            const optIdx = parseInt(this.dataset.opt, 10);
            const container = this.closest('.checkpoint');
            const algo = container.dataset.algo;
            const q = checkpointData[algo][qIdx];
            const opts = container.querySelectorAll(`.check-opt[data-q="${qIdx}"]`);
            const feedback = container.querySelector(`.check-feedback[data-q="${qIdx}"]`);

            if (opts[0].disabled) return;

            opts.forEach((o) => { o.disabled = true; });
            opts.forEach((o) => o.classList.remove('selected'));

            if (optIdx === q.ans) {
                this.classList.add('correct');
                feedback.classList.add('is-correct');
            } else {
                this.classList.add('wrong');
                opts[q.ans].classList.add('correct');
                feedback.classList.add('is-wrong');
            }

            feedback.classList.add('show');
            try {
                const done = JSON.parse(localStorage.getItem('checkpointDone') || '[]');
                if (!done.includes(algo)) {
                    done.push(algo);
                    localStorage.setItem('checkpointDone', JSON.stringify(done));
                }
            } catch (err) { /* ignore quota */ }
        });
    });
}

buildCheckpoints();

/* -------------------------------------------------------------------------
   6. GLOSSARY
   ------------------------------------------------------------------------- */
const glossaryTerms = [
    { term: "Admissible", def: "A heuristic that never overestimates leftover cost. If h is admissible, A* still finds a cheapest path." },
    { term: "Algorithm", def: "A step-by-step set of instructions for solving a problem — like a recipe, but for data." },
    { term: "Array", def: "Another name for a list — a collection of items stored in order. In Python, lists and simple arrays work the same way." },
    { term: "Big-O Notation", def: "Shorthand for roughly how many steps an algorithm takes as the amount of data (n) grows. The lower the number inside the parentheses, the faster it stays as data grows." },
    { term: "Brute Force", def: "Trying every single possibility until you find the answer — no clever shortcuts, just raw checking." },
    { term: "Collision", def: "When two different keys hash to the same bucket. Chains store both." },
    { term: "Class", def: "A named bundle of data plus the actions that use it (push, pop). You do not need object-oriented theory to use the snippets here." },
    { term: "Data Structure", def: "A specific way of organizing information so it can be used efficiently — like a list, stack, queue, or linked list." },
    { term: "Divide and Conquer", def: "Breaking a big problem into smaller, identical sub-problems, solving each tiny piece easily, then combining the results." },
    { term: "Dynamic (size)", def: "Able to grow and shrink as needed, with no fixed size limit — as opposed to a structure with a fixed capacity." },
    { term: "FIFO", def: "\"First In, First Out.\" The item that has been waiting the longest gets removed first — like a line at a coffee shop." },
    { term: "Frontier", def: "The set of nodes waiting to be expanded — the queue in BFS, or the open heap in A*." },
    { term: "Graph", def: "Dots (nodes) connected by lines (edges). A tree is a graph with no loops; a grid is a graph of cells." },
    { term: "Grid", def: "Graph paper: rows and columns. On this page you may move north, east, south, or west — not diagonally." },
    { term: "Hash", def: "A recipe that turns a key (like a name) into a bucket index so lookup skips scanning everything." },
    { term: "Hop", def: "One step to a neighbor. BFS counts hops, not kilometers." },
    { term: "Heuristic", def: "An educated guess of remaining work. In A*, h estimates leftover cost to the goal." },
    { term: "Index", def: "The position number of an item in a list. Starts at 0, not 1." },
    { term: "Indent", def: "Spaces at the start of a Python line that show which lines belong together." },
    { term: "Integer Division", def: "Division that drops any decimal remainder. 7 ÷ 2 = 3.5, but integer division (Python's // operator) makes it 3." },
    { term: "LIFO", def: "\"Last In, First Out.\" The most recently added item is the first one you can remove — like a stack of plates." },
    { term: "Manhattan distance", def: "Taxi-meter distance: |dx| + |dy|. On a 4-way grid it never overestimates how many steps remain." },
    { term: "Merge (sort)", def: "Combine two already-sorted lists by always taking the smaller front item." },
    { term: "Mutable", def: "Can be changed after creation. Mutable lists let you replace, add, or remove items after the list is created." },
    { term: "Neighbor", def: "A node one edge away. On this page's grids: north, east, south, or west — not diagonal." },
    { term: "Node", def: "A labeled box: in a linked list it holds a value and an arrow; in BFS it is a dot on a map." },
    { term: "None", def: "Python's way of saying nothing is here — empty stack, missing next box, empty list." },
    { term: "Partition", def: "The step in Quick Sort that rearranges items around a pivot so smaller items end up on one side and larger items on the other." },
    { term: "Pivot", def: "A reference value chosen during Quick Sort. Every other item is compared against it to decide which side it belongs on." },
    { term: "Pointer", def: "An arrow to another box. In a linked list, next points at the following node." },
    { term: "Program", def: "A recipe the computer follows from top to bottom." },
    { term: "Queue", def: "A first-in-first-out line. BFS uses a queue so closer nodes are processed before farther ones. Full lesson in Part 3." },
    { term: "Recursion", def: "When a function calls itself to solve smaller versions of the same problem, until the problem becomes trivially easy to solve." },
    { term: "Sorted", def: "Arranged from smallest to largest (like 2, 5, 9, 14, 22). Several algorithms, like Binary Search, only work on sorted data." },
    { term: "Space Complexity", def: "How much extra memory an algorithm needs beyond the original list — separate from how many steps (time) it takes." },
    { term: "Stable (sort)", def: "A stable sort keeps equal items in their original relative order — useful when sorting by one field but wanting ties to stay put." },
    { term: "Time Complexity", def: "A measure of how many steps an algorithm takes as the data grows, usually written in Big-O notation like O(n) or O(log n)." },
    { term: "Tree", def: "A graph with no loops, like an org chart. One root, branches downward." },
    { term: "Unweighted vs weighted", def: "Unweighted means every edge costs the same (BFS finds fewest hops). Weighted means edges can have different costs (kilometers, time)." },
    { term: "Variable", def: "A labeled box that holds a value, like name = \"Ada\"." }
];

function buildGlossary() {
    const grid = document.getElementById('glossary-grid');
    if (!grid) return;
    grid.innerHTML = glossaryTerms
        .slice()
        .sort((a, b) => a.term.localeCompare(b.term))
        .map(({ term, def }) => `
            <div class="glossary-item">
                <span class="glossary-term-name">${escapeHtml(term)}</span>
                <span class="glossary-def">${escapeHtml(def)}</span>
            </div>
        `).join('');
}

buildGlossary();

/* -------------------------------------------------------------------------
   7. VISUALIZER COLOR LEGEND
   ------------------------------------------------------------------------- */
function buildColorLegends() {
    const legendHtml = `
        <div class="viz-legend">
            <span class="viz-legend-item"><span class="viz-legend-swatch viz-legend-swatch-checking"></span> Checking</span>
            <span class="viz-legend-item"><span class="viz-legend-swatch viz-legend-swatch-comparing"></span> Comparing</span>
            <span class="viz-legend-item"><span class="viz-legend-swatch viz-legend-swatch-sorted"></span> Sorted</span>
            <span class="viz-legend-item"><span class="viz-legend-swatch viz-legend-swatch-pivot"></span> Pivot</span>
            <span class="viz-legend-item"><span class="viz-legend-swatch viz-legend-swatch-excluded"></span> Excluded</span>
        </div>`;
    document.querySelectorAll('#linear-search .viz-container, #binary-search .viz-container, #sorting .viz-container, #divide .viz-container').forEach(container => {
        if (!container.querySelector('.viz-legend')) {
            container.insertAdjacentHTML('beforeend', legendHtml);
        }
    });
    const pathLegendHtml = `
        <div class="viz-legend">
            <span class="viz-legend-item"><span class="viz-legend-swatch viz-legend-swatch-frontier"></span> Waiting in line</span>
            <span class="viz-legend-item"><span class="viz-legend-swatch viz-legend-swatch-visited"></span> Already checked</span>
            <span class="viz-legend-item"><span class="viz-legend-swatch viz-legend-swatch-path"></span> Final walk</span>
            <span class="viz-legend-item"><span class="viz-legend-swatch viz-legend-swatch-wall"></span> Wall</span>
            <span class="viz-legend-item"><span class="viz-legend-swatch viz-legend-swatch-start"></span> Start</span>
            <span class="viz-legend-item"><span class="viz-legend-swatch viz-legend-swatch-goal"></span> Goal</span>
        </div>`;
    document.querySelectorAll('#bfs .viz-container, #astar .viz-container').forEach(container => {
        if (!container.querySelector('.viz-legend')) {
            container.insertAdjacentHTML('beforeend', pathLegendHtml);
        }
    });
}

/* -------------------------------------------------------------------------
   8. MAIN APP LOGIC (Buttons, Nav, Theme, Clipboard, Progress)
   ------------------------------------------------------------------------- */

// --- Visualizer Instances ---
const vizLinear = new Visualizer('canvas-linear', false, 5, [8, 3, 11, 5, 9]);
const vizBinary = new Visualizer('canvas-binary', true, 7, [3, 7, 11, 15, 19, 23, 27]);
const vizSelection = new Visualizer('canvas-selection', false, 12);
const vizBubble = new Visualizer('canvas-bubble', false, 12);
const vizQuick = new Visualizer('canvas-quick', false, 16);
const vizMerge = new Visualizer('canvas-merge', false, 12);

// Inject color legend into every visualizer
buildColorLegends();

// --- Data Structure Visualizer Instances ---
const vizStack = new StackVisualizer('canvas-stack');
const vizQueue = new QueueVisualizer('canvas-queue');
const vizList = new LinkedListVisualizer('canvas-linked-list');
const vizHash = new HashMapVisualizer('canvas-hash-map');

// Stack controls
document.getElementById('btn-stack-push').addEventListener('click', () => {
    const input = document.getElementById('input-stack');
    const val = readInt(input);
    const statusEl = document.getElementById('status-stack');
    if (isNaN(val)) { setStatus(statusEl, 'Enter a valid number.'); return; }
    if (vizStack.size() >= MAX_DS_ITEMS) { setStatus(statusEl, `Stack is full! Max ${MAX_DS_ITEMS} items.`); return; }
    vizStack.push(val);
    const top = vizStack.peek();
    setStatus(statusEl, `Top: ${top} | Size: ${vizStack.size()}`);
    input.value = Math.floor(Math.random() * 90) + 10;
});
document.getElementById('btn-stack-pop').addEventListener('click', () => {
    const statusEl = document.getElementById('status-stack');
    if (vizStack.size() === 0) { setStatus(statusEl, 'Stack is empty! Nothing to pop.'); return; }
    const popped = vizStack.pop();
    const top = vizStack.peek();
    setStatus(statusEl, `Popped: ${popped} | Top: ${top !== null ? top : '—'} | Size: ${vizStack.size()}`);
});
document.getElementById('btn-stack-reset').addEventListener('click', () => {
    vizStack.reset();
    setStatus(document.getElementById('status-stack'), 'Top: — | Size: 0');
});

// Queue controls
document.getElementById('btn-queue-enqueue').addEventListener('click', () => {
    const input = document.getElementById('input-queue');
    const val = readInt(input);
    const statusEl = document.getElementById('status-queue');
    if (isNaN(val)) { setStatus(statusEl, 'Enter a valid number.'); return; }
    if (vizQueue.size() >= MAX_DS_ITEMS) { setStatus(statusEl, `Queue is full! Max ${MAX_DS_ITEMS} items.`); return; }
    vizQueue.enqueue(val);
    const front = vizQueue.front();
    setStatus(statusEl, `Front: ${front} | Size: ${vizQueue.size()}`);
    input.value = Math.floor(Math.random() * 90) + 10;
});
document.getElementById('btn-queue-dequeue').addEventListener('click', () => {
    const statusEl = document.getElementById('status-queue');
    if (vizQueue.size() === 0) { setStatus(statusEl, 'Queue is empty! Nothing to dequeue.'); return; }
    const dequeued = vizQueue.dequeue();
    const front = vizQueue.front();
    setStatus(statusEl, `Dequeued: ${dequeued} | Front: ${front !== null ? front : '—'} | Size: ${vizQueue.size()}`);
});
document.getElementById('btn-queue-reset').addEventListener('click', () => {
    vizQueue.reset();
    setStatus(document.getElementById('status-queue'), 'Front: — | Size: 0');
});

// Linked List controls
document.getElementById('btn-ll-insert-head').addEventListener('click', () => {
    const input = document.getElementById('input-linked-list');
    const val = readInt(input);
    const statusEl = document.getElementById('status-linked-list');
    if (isNaN(val)) { setStatus(statusEl, 'Enter a valid number.'); return; }
    if (vizList.size() >= MAX_DS_ITEMS) { setStatus(statusEl, `List is full! Max ${MAX_DS_ITEMS} items.`); return; }
    vizList.insertHead(val);
    const head = vizList.items.length > 0 ? vizList.items[0] : '—';
    setStatus(statusEl, `Head: ${head} | Size: ${vizList.size()}`);
    input.value = Math.floor(Math.random() * 90) + 10;
});
document.getElementById('btn-ll-insert-tail').addEventListener('click', () => {
    const input = document.getElementById('input-linked-list');
    const val = readInt(input);
    const statusEl = document.getElementById('status-linked-list');
    if (isNaN(val)) { setStatus(statusEl, 'Enter a valid number.'); return; }
    if (vizList.size() >= MAX_DS_ITEMS) { setStatus(statusEl, `List is full! Max ${MAX_DS_ITEMS} items.`); return; }
    vizList.insertTail(val);
    const head = vizList.items.length > 0 ? vizList.items[0] : '—';
    setStatus(statusEl, `Head: ${head} | Size: ${vizList.size()}`);
    input.value = Math.floor(Math.random() * 90) + 10;
});
document.getElementById('btn-ll-remove').addEventListener('click', () => {
    const input = document.getElementById('input-linked-list');
    const val = readInt(input);
    const statusEl = document.getElementById('status-linked-list');
    if (isNaN(val)) { setStatus(statusEl, 'Enter a valid number.'); return; }
    if (vizList.size() === 0) { setStatus(statusEl, 'List is empty! Nothing to remove.'); return; }
    const removed = vizList.remove(val);
    const head = vizList.items.length > 0 ? vizList.items[0] : '—';
    setStatus(statusEl, removed ? `Removed: ${val} | Head: ${head} | Size: ${vizList.size()}` : `Value ${val} not found. | Head: ${head} | Size: ${vizList.size()}`);
});
document.getElementById('btn-ll-reset').addEventListener('click', () => {
    vizList.reset();
    setStatus(document.getElementById('status-linked-list'), 'Head: — | Size: 0');
});

bindSearchControls(vizLinear, 'linearSearch', 'btn-linear-search', 'btn-linear-reset', 'input-linear', 'status-linear');
bindSearchControls(vizBinary, 'binarySearch', 'btn-binary-search', 'btn-binary-reset', 'input-binary', 'status-binary');
bindSortControls(vizSelection, 'btn-selection-sort', 'btn-selection-reset', 'status-selection', 'selectionSort');
bindSortControls(vizBubble, 'btn-bubble-sort', 'btn-bubble-reset', 'status-bubble', 'bubbleSort');
bindSortControls(vizQuick, 'btn-quick-sort', 'btn-quick-reset', 'status-quick', 'quickSort');
bindSortControls(vizMerge, 'btn-merge-sort', 'btn-merge-reset', 'status-merge', 'mergeSort');

document.getElementById('btn-hash-put').addEventListener('click', () => {
    const key = document.getElementById('input-hash-key').value.trim();
    const val = readInt(document.getElementById('input-hash-val'));
    const statusEl = document.getElementById('status-hash-map');
    if (!key) { setStatus(statusEl, 'Enter a key.'); return; }
    if (isNaN(val)) { setStatus(statusEl, 'Enter a valid number value.'); return; }
    const b = vizHash.put(key, val);
    setStatus(statusEl, `Put ${key}:${val} → bucket ${b}`);
});
document.getElementById('btn-hash-get').addEventListener('click', () => {
    const key = document.getElementById('input-hash-key').value.trim();
    const statusEl = document.getElementById('status-hash-map');
    if (!key) { setStatus(statusEl, 'Enter a key.'); return; }
    const b = vizHash.hashKey(key);
    const v = vizHash.get(key);
    setStatus(statusEl, v !== null ? `Get ${key} → ${v} (bucket ${b})` : `Get ${key} → not found (bucket ${b})`);
});
document.getElementById('btn-hash-reset').addEventListener('click', () => {
    vizHash.reset();
    setStatus(document.getElementById('status-hash-map'), 'Bucket — | Ready');
});

const vizBfsTree = new TreeSearchVisualizer('canvas-bfs-tree', 'bfs');
const vizBfsGrid = new GridSearchVisualizer('canvas-bfs-grid', 'bfs');
const vizAstarTree = new TreeSearchVisualizer('canvas-astar-tree', 'astar');
const vizAstarGrid = new GridSearchVisualizer('canvas-astar-grid', 'astar');
bindPathControls(vizBfsTree, 'btn-bfs-tree-run', 'btn-bfs-tree-reset', 'status-bfs-tree', false);
bindPathControls(vizBfsGrid, 'btn-bfs-grid-run', 'btn-bfs-grid-reset', 'status-bfs-grid', true);
bindPathControls(vizAstarTree, 'btn-astar-tree-run', 'btn-astar-tree-reset', 'status-astar-tree', false);
bindPathControls(vizAstarGrid, 'btn-astar-grid-run', 'btn-astar-grid-reset', 'status-astar-grid', true);

// --- Mermaid dark-mode re-theming ---
// Mermaid bakes its colors into the rendered SVG at render time, so simply
// toggling a CSS class does nothing — the diagrams have to be re-rendered
// with new themeVariables. We capture each diagram's original source text
// now (before mermaid's own startOnLoad pass consumes it) so we can reset
// and re-render on demand.
const mermaidSourceMap = new Map();
document.querySelectorAll('.mermaid').forEach(el => {
    mermaidSourceMap.set(el, el.textContent);
});

const MERMAID_LIGHT_VARS = {
    primaryColor: '#f2f2f5',
    primaryTextColor: '#111111',
    primaryBorderColor: '#eaeaee',
    lineColor: '#555555',
    secondaryColor: '#f9f9fb',
    tertiaryColor: '#f59e0b',
    fontFamily: 'Inter, sans-serif'
};
const MERMAID_DARK_VARS = {
    primaryColor: '#1c1c24',
    primaryTextColor: '#f3f4f6',
    primaryBorderColor: '#374151',
    lineColor: '#c0c4cc',
    secondaryColor: '#14141a',
    tertiaryColor: '#f59e0b',
    fontFamily: 'Inter, sans-serif',
    background: '#0d0d12'
};

function reThemeMermaid(isDark) {
    if (typeof mermaid === 'undefined' || mermaidSourceMap.size === 0) return;
    mermaid.initialize({
        startOnLoad: false,
        theme: isDark ? 'dark' : 'base',
        themeVariables: isDark ? MERMAID_DARK_VARS : MERMAID_LIGHT_VARS,
        flowchart: { useMaxWidth: true, htmlLabels: true, curve: 'basis' }
    });
    mermaidSourceMap.forEach((src, el) => {
        el.removeAttribute('data-processed');
        el.innerHTML = '';
        el.textContent = src;
    });
    mermaid.run({ querySelector: '.mermaid' }).catch(() => {});
}

// Theme Toggle
const themeBtn = document.getElementById('theme-toggle');
const html = document.documentElement;
let currentTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', currentTheme);
themeBtn.textContent = currentTheme === 'dark' ? '☀️' : '🌙';

// If a returning visitor loads straight into dark mode, re-theme the
// diagrams once mermaid's own initial (light-themed) render has settled.
window.addEventListener('load', () => {
    if (html.getAttribute('data-theme') === 'dark') reThemeMermaid(true);
});

themeBtn.addEventListener('click', () => {
    if (html.getAttribute('data-theme') === 'dark') {
        html.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        themeBtn.textContent = '🌙';
        reThemeMermaid(false);
    } else {
        html.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        themeBtn.textContent = '☀️';
        reThemeMermaid(true);
    }
});

// Keyboard shortcuts for quiz (1-4 to select options)
document.addEventListener('keydown', (e) => {
    const key = parseInt(e.key, 10);
    if (key >= 1 && key <= 4) {
        const activeCard = document.querySelector('.quiz-card.active');
        if (activeCard && !activeCard.id.includes('results')) {
            const opts = activeCard.querySelectorAll('.quiz-opt:not([aria-disabled="true"])');
            if (opts[key - 1]) opts[key - 1].click();
        }
    }
});

// Mobile Nav
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const navOverlay = document.getElementById('nav-overlay');

function closeNav() {
    navLinks.classList.remove('nav-open');
    navOverlay.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
}

function openNav() {
    navLinks.classList.add('nav-open');
    navOverlay.classList.add('active');
    hamburger.setAttribute('aria-expanded', 'true');
}

hamburger.addEventListener('click', () => {
    const isOpen = navLinks.classList.contains('nav-open');
    if (isOpen) closeNav(); else openNav();
});

navOverlay.addEventListener('click', closeNav);

navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', closeNav);
});

// Copy Code
document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const codeEl = btn.nextElementSibling.querySelector('code');
        const snippetId = codeEl ? codeEl.id : null;
        const text = snippetId && snippets[snippetId] ? snippets[snippetId] : (codeEl ? codeEl.textContent : '');
        navigator.clipboard.writeText(text).then(() => {
            const originalText = btn.textContent;
            btn.textContent = 'Copied!';
            setTimeout(() => btn.textContent = originalText, 2000);
        }).catch(() => {
            const textArea = document.createElement("textarea");
            textArea.value = text;
            document.body.appendChild(textArea);
            textArea.select();
            try {
                document.execCommand('copy');
                btn.textContent = 'Copied!';
                setTimeout(() => btn.textContent = 'Copy', 2000);
            } catch {
                btn.textContent = 'Failed';
            }
            document.body.removeChild(textArea);
        });
    });
});

// Scroll Progress Bar
const progressBar = document.getElementById('progress-bar');
if (progressBar) {
    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        progressBar.style.width = progress + '%';
    });
}

const SCROLL_OUTLINE_SECTIONS = [
    { id: 'prerequisites', label: 'Pre-requisites' },
    { id: 'linear-search', label: 'Linear Search' },
    { id: 'selection-sort', label: 'Selection Sort' },
    { id: 'bubble-sort', label: 'Bubble Sort' },
    { id: 'binary-search', label: 'Binary Search' },
    { id: 'stack', label: 'Stack' },
    { id: 'queue', label: 'Queue' },
    { id: 'bfs', label: 'BFS' },
    { id: 'astar', label: 'A*' },
    { id: 'linked-list', label: 'Linked List' },
    { id: 'quick-sort', label: 'Quick Sort' },
    { id: 'merge-sort', label: 'Merge Sort' },
    { id: 'hash-map', label: 'Hash Map' },
    { id: 'cheat-sheet', label: 'Cheat Sheet' },
    { id: 'quiz', label: 'Quiz' }
];

const NAV_OFFSET = 78;
const smoothScroll = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function scrollToSection(el) {
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
    window.scrollTo({ top, behavior: smoothScroll ? 'smooth' : 'auto' });
}

function buildScrollOutline(sections) {
    const zone = document.createElement('div');
    zone.className = 'scroll-outline-zone';
    zone.setAttribute('aria-hidden', 'true');

    const rail = document.createElement('nav');
    rail.id = 'scroll-outline';
    rail.className = 'scroll-outline';
    rail.setAttribute('aria-label', 'On this page');

    const items = [];
    sections.forEach(({ id, label }) => {
        const target = document.getElementById(id);
        if (!target) return;
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'scroll-outline__item';
        btn.dataset.section = id;
        const dot = document.createElement('span');
        dot.className = 'scroll-outline__dot';
        dot.setAttribute('aria-hidden', 'true');
        const text = document.createElement('span');
        text.className = 'scroll-outline__label';
        text.textContent = label;
        btn.append(dot, text);
        btn.addEventListener('click', () => scrollToSection(target));
        rail.appendChild(btn);
        items.push({ id, btn, target });
    });

    document.body.append(zone, rail);

    const show = () => rail.classList.add('is-visible');
    const hide = () => rail.classList.remove('is-visible');
    zone.addEventListener('mouseenter', show);
    zone.addEventListener('mouseleave', hide);
    rail.addEventListener('mouseenter', show);
    rail.addEventListener('mouseleave', hide);

    if ('IntersectionObserver' in window && items.length) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                items.forEach((item) => {
                    item.btn.classList.toggle('is-active', item.target === entry.target);
                });
            });
        }, { rootMargin: '-78px 0px -60% 0px', threshold: 0.12 });
        items.forEach((item) => observer.observe(item.target));
    }
}

buildScrollOutline(SCROLL_OUTLINE_SECTIONS);

document.querySelectorAll('#bfs .algo-visualizer, #astar .algo-visualizer').forEach((wrap) => {
    const boxes = wrap.querySelectorAll('.viz-container');
    if (boxes.length < 2) return;
    const tabs = document.createElement('div');
    tabs.className = 'viz-tabs';
    tabs.setAttribute('role', 'tablist');
    ['Org chart', 'City grid'].forEach((label, i) => {
        const b = document.createElement('button');
        b.type = 'button';
        b.className = 'viz-tab' + (i === 0 ? ' is-active' : '');
        b.textContent = label;
        b.addEventListener('click', () => {
            tabs.querySelectorAll('.viz-tab').forEach((t) => t.classList.remove('is-active'));
            b.classList.add('is-active');
            boxes.forEach((box, j) => { box.hidden = j !== i; });
        });
        tabs.appendChild(b);
    });
    wrap.insertBefore(tabs, wrap.firstChild);
    boxes[1].hidden = true;
});

document.addEventListener('click', (e) => {
    const term = e.target.closest && e.target.closest('.glossary-term');
    document.querySelectorAll('.glossary-term.is-open').forEach((el) => {
        if (el !== term) el.classList.remove('is-open');
    });
    if (term) {
        e.preventDefault();
        term.classList.toggle('is-open');
    }
});

function runSelfCheck() {
    const failures = [];
    if (!escapeHtml('<x>').includes('&lt;')) failures.push('escapeHtml');
    if (highlightPython('x < 1').indexOf('&lt;') === -1) failures.push('highlightPython');
    if (quizQuestions.length !== 18) failures.push('quizQuestions.length');
    quizQuestions.forEach((q, i) => {
        if (!(q.ans >= 0 && q.ans < q.opts.length)) failures.push('quiz ans ' + i);
    });
    Object.keys(snippets).forEach((id) => {
        if (!document.getElementById(id)) failures.push('missing #' + id);
    });
    const banner = document.createElement('pre');
    banner.id = 'selfcheck-banner';
    banner.textContent = failures.length ? 'self-check failed:\n' + failures.join('\n') : 'self-check: ok';
    document.body.prepend(banner);
    console.assert(failures.length === 0, failures);
}

if (new URLSearchParams(location.search).has('selfcheck')) runSelfCheck();

})();
