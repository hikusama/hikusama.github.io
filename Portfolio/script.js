document.addEventListener("DOMContentLoaded", function () {
    var heademp = document.querySelector('.heademp2');
    var employees = document.querySelectorAll('.employees li');
    var aboutUl = document.querySelector('.about ul');

    function isInViewport(element) {
        var rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function handleScroll() {
        employees.forEach(function (employee) {
            if (isInViewport(employee)) {
                employee.classList.add('visible');
            }
        });

        // Check if the heademp element is in the viewport
        if (isInViewport(heademp)) {
            aboutUl.classList.add("vibot");
        }
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check on page load
});
