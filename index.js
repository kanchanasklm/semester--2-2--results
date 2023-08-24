let buttonEl=document.getElementById("button");
let finalResultEl=document.getElementById("result");

let OperationResearchEl=document.getElementById("OR");
let ComputerOrganizationArchitectureEl=document.getElementById("COA");
let DataScienceWithPythonEl=document.getElementById("DSP");
let WebTechnologiesEl=document.getElementById("WT");
let CompilerDesignEl=document.getElementById("CD");
let ComputerOrganizationArchitectureLabEl=document.getElementById("COALab");
let DataScienceWithPythonLabEl=document.getElementById("DSPLab");
let WebTechnologiesLabEl=document.getElementById("WTLab");

let creddits=19.5; 
let result=0;
// let count=0;
function credits(subGrade, creditts) {

    // count++;
    if (subGrade === "Ex") {
        // result += (10 * creditts);
        return (10 * creditts)
        

    } else if (subGrade === "A") {
        // result += (9 * creditts);
        return (9 * creditts)
    } else if (subGrade === "B") {
        // result += (8 * creditts);
        return (8 * creditts);
        
    } else if (subGrade === "C") {
        // result += (7 * creditts);
        return (7 * creditts)
    } else if (subGrade === "D") {
        // result += (6 * creditts);
        return (6 * creditts)
    }
    else if (subGrade === "E") {
        // result += (6 * creditts);
        return (5 * creditts)
    }
    else if (subGrade === "F") {
        // result += (6 * creditts);
        return 0
    }
    
//    finalResultEl.textContent=result/creddits;
}



buttonEl.onclick=function()
{
    let OperationResearchElGrade = OperationResearchEl.value;
    let ComputerOrganizationArchitectureElGrade = ComputerOrganizationArchitectureEl.value;
    let DataScienceWithPythonElGrade=DataScienceWithPythonEl.value;
    let WebTechnologiesElGrade= WebTechnologiesEl.value; 
    let CompilerDesignElGrade=CompilerDesignEl.value;
    let ComputerOrganizationArchitectureLabElGrade=ComputerOrganizationArchitectureLabEl.value;
    let DataScienceWithPythonLabElGrade=DataScienceWithPythonLabEl.value;
    let WebTechnologiesLabElGrade=WebTechnologiesLabEl.value;
    

   
    result+=credits(OperationResearchElGrade,3);
    result+=credits(ComputerOrganizationArchitectureElGrade,3);
    result+=credits(DataScienceWithPythonElGrade,3);
    result+=credits(WebTechnologiesElGrade,3);
    result+=credits(CompilerDesignElGrade,3);
    result+=credits(ComputerOrganizationArchitectureLabElGrade,1.5);
    result+=credits(DataScienceWithPythonLabElGrade,1.5);
    result+=credits(WebTechnologiesLabElGrade,1.5);
    
    
    finalResultEl.textContent=(result/creddits).toFixed(2);
    result=0;
};
