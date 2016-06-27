System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ValidationService;
    return {
        setters:[],
        execute: function() {
            class ValidationService {
                static getValidatorErrorMessage(code) {
                    let config = {
                        'required': 'Required',
                        'minlength': 'Name should contain at least 3 characters',
                        'maxlength': 'Name should be less than 30 characters',
                        'invalidNameLength': 'Name should  contains minimum 2 characters and not more than 30. ',
                        'invalidCreditCard': 'Is invalid credit card number',
                        'invalidEmailAddress': 'Invalid email address',
                        'invalidPassword': 'Invalid password. Password must be at least 6 characters long, and contain a number.'
                    };
                    return config[code];
                }
                static creditCardValidator(control) {
                    // Visa, MasterCard, American Express, Diners Club, Discover, JCB
                    if (control.value.match(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/)) {
                        return null;
                    }
                    else {
                        return { 'invalidCreditCard': true };
                    }
                }
                static emailValidator(control) {
                    // RFC 2822 compliant regex
                    if (control.value == '' || control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
                        return null;
                    }
                    else {
                        return { 'invalidEmailAddress': true };
                    }
                }
                static nameValidator(control) {
                    // {6,100}           - Assert password is between 6 and 100 characters
                    // (?=.*[0-9])       - Assert a string has at least one number
                    if (control.value.match(/^([a-zA-Z]\s){3,30}$/)) {
                        return null;
                    }
                    else {
                        return { 'invalidNameLength': true };
                    }
                }
                static passwordValidator(control) {
                    // {6,100}           - Assert password is between 6 and 100 characters
                    // (?=.*[0-9])       - Assert a string has at least one number
                    if (control.value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/)) {
                        return null;
                    }
                    else {
                        return { 'invalidPassword': true };
                    }
                }
            }
            exports_1("ValidationService", ValidationService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9zZXJ2aWNlcy92YWxpZGF0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztZQUFBO2dCQUVJLE9BQU8sd0JBQXdCLENBQUMsSUFBWTtvQkFDeEMsSUFBSSxNQUFNLEdBQUc7d0JBQ1QsVUFBVSxFQUFFLFVBQVU7d0JBQ3RCLFdBQVcsRUFBRSwyQ0FBMkM7d0JBQ3hELFdBQVcsRUFBRSx3Q0FBd0M7d0JBQ3JELG1CQUFtQixFQUFFLG1FQUFtRTt3QkFDeEYsbUJBQW1CLEVBQUUsK0JBQStCO3dCQUNwRCxxQkFBcUIsRUFBRSx1QkFBdUI7d0JBQzlDLGlCQUFpQixFQUFFLHNGQUFzRjtxQkFDNUcsQ0FBQztvQkFDRixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN4QixDQUFDO2dCQUVELE9BQU8sbUJBQW1CLENBQUMsT0FBTztvQkFDOUIsaUVBQWlFO29CQUNqRSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyx1SkFBdUosQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDL0ssTUFBTSxDQUFDLElBQUksQ0FBQztvQkFDaEIsQ0FBQztvQkFBQyxJQUFJLENBQUMsQ0FBQzt3QkFDSixNQUFNLENBQUMsRUFBRSxtQkFBbUIsRUFBRSxJQUFJLEVBQUUsQ0FBQztvQkFDekMsQ0FBQztnQkFDTCxDQUFDO2dCQUVELE9BQU8sY0FBYyxDQUFDLE9BQU87b0JBQ3pCLDJCQUEyQjtvQkFDM0IsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssSUFBSSxFQUFFLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsdUlBQXVJLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ3RMLE1BQU0sQ0FBQyxJQUFJLENBQUM7b0JBQ2hCLENBQUM7b0JBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ0osTUFBTSxDQUFDLEVBQUUscUJBQXFCLEVBQUUsSUFBSSxFQUFFLENBQUM7b0JBQzNDLENBQUM7Z0JBQ0wsQ0FBQztnQkFFQSxPQUFPLGFBQWEsQ0FBQyxPQUFPO29CQUN6QixzRUFBc0U7b0JBQ3RFLDhEQUE4RDtvQkFDOUQsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQzlDLE1BQU0sQ0FBQyxJQUFJLENBQUM7b0JBQ2hCLENBQUM7b0JBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ0osTUFBTSxDQUFDLEVBQUUsbUJBQW1CLEVBQUUsSUFBSSxFQUFFLENBQUM7b0JBQ3pDLENBQUM7Z0JBQ0wsQ0FBQztnQkFFRCxPQUFPLGlCQUFpQixDQUFDLE9BQU87b0JBQzVCLHNFQUFzRTtvQkFDdEUsOERBQThEO29CQUM5RCxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDakUsTUFBTSxDQUFDLElBQUksQ0FBQztvQkFDaEIsQ0FBQztvQkFBQyxJQUFJLENBQUMsQ0FBQzt3QkFDSixNQUFNLENBQUMsRUFBRSxpQkFBaUIsRUFBRSxJQUFJLEVBQUUsQ0FBQztvQkFDdkMsQ0FBQztnQkFDTCxDQUFDO1lBQ0wsQ0FBQztZQXBERCxpREFvREMsQ0FBQSIsImZpbGUiOiJzaGFyZWQvc2VydmljZXMvdmFsaWRhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFZhbGlkYXRpb25TZXJ2aWNlIHtcclxuICAgICBcclxuICAgIHN0YXRpYyBnZXRWYWxpZGF0b3JFcnJvck1lc3NhZ2UoY29kZTogc3RyaW5nKSB7XHJcbiAgICAgICAgbGV0IGNvbmZpZyA9IHtcclxuICAgICAgICAgICAgJ3JlcXVpcmVkJzogJ1JlcXVpcmVkJyxcclxuICAgICAgICAgICAgJ21pbmxlbmd0aCc6ICdOYW1lIHNob3VsZCBjb250YWluIGF0IGxlYXN0IDMgY2hhcmFjdGVycycsXHJcbiAgICAgICAgICAgICdtYXhsZW5ndGgnOiAnTmFtZSBzaG91bGQgYmUgbGVzcyB0aGFuIDMwIGNoYXJhY3RlcnMnLFxyXG4gICAgICAgICAgICAnaW52YWxpZE5hbWVMZW5ndGgnOiAnTmFtZSBzaG91bGQgIGNvbnRhaW5zIG1pbmltdW0gMiBjaGFyYWN0ZXJzIGFuZCBub3QgbW9yZSB0aGFuIDMwLiAnLFxyXG4gICAgICAgICAgICAnaW52YWxpZENyZWRpdENhcmQnOiAnSXMgaW52YWxpZCBjcmVkaXQgY2FyZCBudW1iZXInLFxyXG4gICAgICAgICAgICAnaW52YWxpZEVtYWlsQWRkcmVzcyc6ICdJbnZhbGlkIGVtYWlsIGFkZHJlc3MnLFxyXG4gICAgICAgICAgICAnaW52YWxpZFBhc3N3b3JkJzogJ0ludmFsaWQgcGFzc3dvcmQuIFBhc3N3b3JkIG11c3QgYmUgYXQgbGVhc3QgNiBjaGFyYWN0ZXJzIGxvbmcsIGFuZCBjb250YWluIGEgbnVtYmVyLidcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBjb25maWdbY29kZV07XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNyZWRpdENhcmRWYWxpZGF0b3IoY29udHJvbCkge1xyXG4gICAgICAgIC8vIFZpc2EsIE1hc3RlckNhcmQsIEFtZXJpY2FuIEV4cHJlc3MsIERpbmVycyBDbHViLCBEaXNjb3ZlciwgSkNCXHJcbiAgICAgICAgaWYgKGNvbnRyb2wudmFsdWUubWF0Y2goL14oPzo0WzAtOV17MTJ9KD86WzAtOV17M30pP3w1WzEtNV1bMC05XXsxNH18Nig/OjAxMXw1WzAtOV1bMC05XSlbMC05XXsxMn18M1s0N11bMC05XXsxM318Myg/OjBbMC01XXxbNjhdWzAtOV0pWzAtOV17MTF9fCg/OjIxMzF8MTgwMHwzNVxcZHszfSlcXGR7MTF9KSQvKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4geyAnaW52YWxpZENyZWRpdENhcmQnOiB0cnVlIH07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgIFxyXG4gICAgc3RhdGljIGVtYWlsVmFsaWRhdG9yKGNvbnRyb2wpIHtcclxuICAgICAgICAvLyBSRkMgMjgyMiBjb21wbGlhbnQgcmVnZXhcclxuICAgICAgICBpZiAoY29udHJvbC52YWx1ZSA9PSAnJyB8fCBjb250cm9sLnZhbHVlLm1hdGNoKC9bYS16MC05ISMkJSYnKisvPT9eX2B7fH1+LV0rKD86XFwuW2EtejAtOSEjJCUmJyorLz0/Xl9ge3x9fi1dKykqQCg/OlthLXowLTldKD86W2EtejAtOS1dKlthLXowLTldKT9cXC4pK1thLXowLTldKD86W2EtejAtOS1dKlthLXowLTldKT8vKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4geyAnaW52YWxpZEVtYWlsQWRkcmVzcyc6IHRydWUgfTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgICBzdGF0aWMgbmFtZVZhbGlkYXRvcihjb250cm9sKSB7XHJcbiAgICAgICAgLy8gezYsMTAwfSAgICAgICAgICAgLSBBc3NlcnQgcGFzc3dvcmQgaXMgYmV0d2VlbiA2IGFuZCAxMDAgY2hhcmFjdGVyc1xyXG4gICAgICAgIC8vICg/PS4qWzAtOV0pICAgICAgIC0gQXNzZXJ0IGEgc3RyaW5nIGhhcyBhdCBsZWFzdCBvbmUgbnVtYmVyXHJcbiAgICAgICAgaWYgKGNvbnRyb2wudmFsdWUubWF0Y2goL14oW2EtekEtWl1cXHMpezMsMzB9JC8pKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7ICdpbnZhbGlkTmFtZUxlbmd0aCc6IHRydWUgfTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAgXHJcbiAgICBzdGF0aWMgcGFzc3dvcmRWYWxpZGF0b3IoY29udHJvbCkge1xyXG4gICAgICAgIC8vIHs2LDEwMH0gICAgICAgICAgIC0gQXNzZXJ0IHBhc3N3b3JkIGlzIGJldHdlZW4gNiBhbmQgMTAwIGNoYXJhY3RlcnNcclxuICAgICAgICAvLyAoPz0uKlswLTldKSAgICAgICAtIEFzc2VydCBhIHN0cmluZyBoYXMgYXQgbGVhc3Qgb25lIG51bWJlclxyXG4gICAgICAgIGlmIChjb250cm9sLnZhbHVlLm1hdGNoKC9eKD89LipbMC05XSlbYS16QS1aMC05IUAjJCVeJipdezYsMTAwfSQvKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4geyAnaW52YWxpZFBhc3N3b3JkJzogdHJ1ZSB9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
