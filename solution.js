function isBalanced(s) {
    // Write your code here
    const progress = []
    
    const match = {
        "]": "[",
        "}": "{",
        ")": "("
    }
    
    for (let i = 0; i < s.length; i++) {
        const lastElement = progress[progress.length - 1]
        if (lastElement && match[s[i]]) {
            if (lastElement === match[s[i]]) {
                progress.pop()  
            } else {
                return "NO"
            }
        } else {
            progress.push(s[i])
        }
    }
    
    return !progress.length ? "YES" : "NO"
}
