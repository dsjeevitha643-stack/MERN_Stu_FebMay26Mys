const questionInput = document.getElementById("question");
const answerInput = document.getElementById("answer");
const addBtn = document.getElementById("addFaq");
const faqContainer = document.getElementById("faqContainer");
const error = document.getElementById("error");
const emptyMessage = document.getElementById("emptyMessage");

addBtn.addEventListener("click", function(){

    const question = questionInput.value.trim();
    const answer = answerInput.value.trim();

    if(question.length < 5){
        error.innerText = "Question must be at least 5 characters";
        return;
    }

    if(answer.length < 15){
        error.innerText = "Answer must be at least 15 characters";
        return;
    }
    heading.insertAdjacentHTML("beforeend", " <span style='color:white;background:blue;padding:2px 6px;border-radius:4px;'>FAQ</span>");

    const paragraph = document.createElement("p");
    paragraph.innerText = answer;

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";

    deleteBtn.addEventListener("click", function(){
        faqBlock.remove();

        if(faqContainer.children.length === 0){
            emptyMessage.style.display = "block";
        }
        
    });

    faqBlock.appendChild(heading);
    faqBlock.appendChild(paragraph);
    faqBlock.appendChild(deleteBtn);

    faqContainer.appendChild(faqBlock);

    questionInput.addEventListener("input",() => message.textContent = "");
    answerInput.addEventListener("input",() => message.textContent = "");

});