var apiUrl;
document.addEventListener('DOMContentLoaded', function() {
    var couponResult = sessionStorage.getItem('couponResult');
    if (couponResult) {
        document.getElementById('coupon-result').textContent = couponResult;
    }
    var currentUrl = window.location.href;
    var parentFolder = currentUrl.split('/').reverse()[1];
    apiUrl = 'https://coupons.jhwatchfaces.com/' + parentFolder + '/get_coupon.php';
    
    
});

// Function to get coupon code
    document.getElementById('getCoupon').addEventListener('click', function() {
        var hasReceivedCoupon = sessionStorage.getItem('hasReceivedCoupon');
        var myDiv = document.getElementById("actionButtons");
        console.log(apiUrl); // This will print the constructed URL in the console
        if (!hasReceivedCoupon) {
            // Send a request to the server to get a coupon
            fetch(apiUrl)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.text();
                })
                .then(data => {
                    document.getElementById('coupon-result').textContent = data;
                    document.getElementById('getCoupon').classList.add('fadeLeftOnLoad');
                    sessionStorage.setItem('hasReceivedCoupon', 'true');
                    sessionStorage.setItem('couponResult', data); // Store coupon code
                })
                .catch(error => {
                    // alert('Error: Unable to get coupon code');
                    // console.error('Error:', error);

                    document.getElementById('coupon-result').textContent = "ASJIUY439898F8F8FDH83S";
                    document.getElementById('getCoupon').remove();
                    myDiv.style.display = "inline-flex";
                    myDiv.style.gap = "10px";
                    myDiv.style.margin = "0 auto";
                });
        } else {
            alert('You have already received a coupon.');
        }
    });

// Function to copy coupon to clipboard
    var myLink = document.getElementById("coupon-result");
    var copyButton = document.getElementById("copyButton");
    copyButton.addEventListener("click", copyToClipboard);
    //copyButton.addEventListener("touchstart", copyToClipboard);

    function copyToClipboard() {
        // Create a temporary input element
        var tempInput = document.createElement("input");
        tempInput.style.position = "absolute";
        tempInput.style.left = "-1000px";
        tempInput.style.top = "-1000px";

        // Set the input value to the link text
        tempInput.value = myLink.textContent || myLink.innerText;

        // Append the input element to the body
        document.body.appendChild(tempInput);

        // Select and copy the text
        tempInput.select();
        document.execCommand("copy");

        // Remove the temporary input element
        document.body.removeChild(tempInput);

        // Provide some visual feedback (optional)
        var feedback = document.createElement("div");
        feedback.textContent = "Coupon code has been copied!";
        feedback.style.position = "fixed";
        feedback.style.fontFamily = "Roboto";
        feedback.style.textAlign = "center";
        feedback.style.bottom = "20%";
        feedback.style.left = "50%";
        feedback.style.transform = "translateX(-50%)";
        feedback.style.padding = "10px 20px";
        feedback.style.background = "#333";
        feedback.style.color = "#fff";
        feedback.style.borderRadius = "20px";
        feedback.style.zIndex = "999";
        document.body.appendChild(feedback);
        setTimeout(function() {
            feedback.style.opacity = "0";
            setTimeout(function() {
                document.body.removeChild(feedback);
            }, 1000);
        }, 3000);
    }