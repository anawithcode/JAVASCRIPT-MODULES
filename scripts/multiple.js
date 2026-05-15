const company = "Zendekia Academy";

function sum(first, second) {
    return first + second;
};

class Company {

};

// export {company as perusahaan, sum as total, Company as Perusahaan}; --> Ini pake Alias tapi export
export {company, sum, Company}; // Bisa export semuanya sekaligus dengan cara seperti ini