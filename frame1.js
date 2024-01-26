var products = [ // ------> array
    
        
          {
            Id: "01",
            Customer: "XYZ",
            Location : "kk",
            Order: "done",
            Status: "jjj",
            Amount: "5544"
          },
          {
            Id: "01",
            Customer: "XYZ",
            Location : "kk",
            Order: "done",
            Status: "jjj",
            Amount: "5544"
          }
          
          
    ];

function loadClick(){
    for (var product of products){
        
        // creat thee elments
        var tr = document.createElement("tr");
        var tdId = document.createElement("td");
        var tdCustomer = document.createElement("td");
        var tdlocation = document.createElement("td");
        var tdOrder = document.createElement("td");
        var tdStatus = document.createElement("td");
        var tdAmount = document.createElement("td");

        // to desplay in the cells we have add. pl -- in td cells added the given data (u r linking td data with td)
        tdId.innerHTML = product.Id;
        tdCustomer.innerHTML = product.Customer;
        tdlocation.innerHTML = product.Location;
        tdOrder.innerHTML = product.Order;
        tdStatus.innerHTML = product.Status;
        tdAmount.innerHTML = product.Amount;
        // appending the td to tr
        tr.appendChild(tdId);
        tr.appendChild(tdCustomer);
        tr.appendChild(tdlocation);
        tr.appendChild(tdOrder);
        tr.appendChild(tdStatus);
        tr.appendChild(tdAmount);

        // this tr should be added to the tbody.and need to append the tr.

        document.querySelector("tbody").appendChild(tr);

        

    }

}