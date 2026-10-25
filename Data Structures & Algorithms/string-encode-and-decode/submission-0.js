class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded="";
        for(let word of strs){
            encoded+= word.length+'#'+word;
        }
        return encoded;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const res=[];
        let i=0;
        while(i<str.length){
            let j = i;
            while (str[j] !== "#") {
                j++;
            }
            const length = parseInt(str.slice(i, j));
            const word = str.slice(j + 1, j + 1 + length);
            res.push(word);

            i = j + 1 + length;
        }
        return res;
    }
}
