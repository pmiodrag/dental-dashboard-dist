System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ValidationService;
    return {
        setters:[],
        execute: function() {
            ValidationService = (function () {
                function ValidationService() {
                }
                ValidationService.getValidatorErrorMessage = function (code) {
                    var config = {
                        'required': 'Required',
                        'minlength': 'Name should contain at least 3 characters',
                        'maxlength': 'Name should be less than 30 characters',
                        'invalidNameLength': 'Name should  contains minimum 2 characters and not more than 30. ',
                        'invalidCreditCard': 'Is invalid credit card number',
                        'invalidEmailAddress': 'Invalid email address',
                        'invalidPassword': 'Invalid password. Password must be at least 6 characters long, and contain a number.'
                    };
                    return config[code];
                };
                ValidationService.creditCardValidator = function (control) {
                    // Visa, MasterCard, American Express, Diners Club, Discover, JCB
                    if (control.value.match(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/)) {
                        return null;
                    }
                    else {
                        return { 'invalidCreditCard': true };
                    }
                };
                ValidationService.emailValidator = function (control) {
                    // RFC 2822 compliant regex
                    if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
                        return null;
                    }
                    else {
                        return { 'invalidEmailAddress': true };
                    }
                };
                ValidationService.nameValidator = function (control) {
                    // {6,100}           - Assert password is between 6 and 100 characters
                    // (?=.*[0-9])       - Assert a string has at least one number
                    if (control.value.match(/^([a-zA-Z]\s){3,30}$/)) {
                        return null;
                    }
                    else {
                        return { 'invalidNameLength': true };
                    }
                };
                ValidationService.passwordValidator = function (control) {
                    // {6,100}           - Assert password is between 6 and 100 characters
                    // (?=.*[0-9])       - Assert a string has at least one number
                    if (control.value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/)) {
                        return null;
                    }
                    else {
                        return { 'invalidPassword': true };
                    }
                };
                return ValidationService;
            }());
            exports_1("ValidationService", ValidationService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9zZXJ2aWNlcy92YWxpZGF0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztZQUFBO2dCQUFBO2dCQW9EQSxDQUFDO2dCQWxEVSwwQ0FBd0IsR0FBL0IsVUFBZ0MsSUFBWTtvQkFDeEMsSUFBSSxNQUFNLEdBQUc7d0JBQ1QsVUFBVSxFQUFFLFVBQVU7d0JBQ3RCLFdBQVcsRUFBRSwyQ0FBMkM7d0JBQ3hELFdBQVcsRUFBRSx3Q0FBd0M7d0JBQ3JELG1CQUFtQixFQUFFLG1FQUFtRTt3QkFDeEYsbUJBQW1CLEVBQUUsK0JBQStCO3dCQUNwRCxxQkFBcUIsRUFBRSx1QkFBdUI7d0JBQzlDLGlCQUFpQixFQUFFLHNGQUFzRjtxQkFDNUcsQ0FBQztvQkFDRixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN4QixDQUFDO2dCQUVNLHFDQUFtQixHQUExQixVQUEyQixPQUFPO29CQUM5QixpRUFBaUU7b0JBQ2pFLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLHVKQUF1SixDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUMvSyxNQUFNLENBQUMsSUFBSSxDQUFDO29CQUNoQixDQUFDO29CQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNKLE1BQU0sQ0FBQyxFQUFFLG1CQUFtQixFQUFFLElBQUksRUFBRSxDQUFDO29CQUN6QyxDQUFDO2dCQUNMLENBQUM7Z0JBRU0sZ0NBQWMsR0FBckIsVUFBc0IsT0FBTztvQkFDekIsMkJBQTJCO29CQUMzQixFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyx1SUFBdUksQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDL0osTUFBTSxDQUFDLElBQUksQ0FBQztvQkFDaEIsQ0FBQztvQkFBQyxJQUFJLENBQUMsQ0FBQzt3QkFDSixNQUFNLENBQUMsRUFBRSxxQkFBcUIsRUFBRSxJQUFJLEVBQUUsQ0FBQztvQkFDM0MsQ0FBQztnQkFDTCxDQUFDO2dCQUVPLCtCQUFhLEdBQXBCLFVBQXFCLE9BQU87b0JBQ3pCLHNFQUFzRTtvQkFDdEUsOERBQThEO29CQUM5RCxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDOUMsTUFBTSxDQUFDLElBQUksQ0FBQztvQkFDaEIsQ0FBQztvQkFBQyxJQUFJLENBQUMsQ0FBQzt3QkFDSixNQUFNLENBQUMsRUFBRSxtQkFBbUIsRUFBRSxJQUFJLEVBQUUsQ0FBQztvQkFDekMsQ0FBQztnQkFDTCxDQUFDO2dCQUVNLG1DQUFpQixHQUF4QixVQUF5QixPQUFPO29CQUM1QixzRUFBc0U7b0JBQ3RFLDhEQUE4RDtvQkFDOUQsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMseUNBQXlDLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ2pFLE1BQU0sQ0FBQyxJQUFJLENBQUM7b0JBQ2hCLENBQUM7b0JBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ0osTUFBTSxDQUFDLEVBQUUsaUJBQWlCLEVBQUUsSUFBSSxFQUFFLENBQUM7b0JBQ3ZDLENBQUM7Z0JBQ0wsQ0FBQztnQkFDTCx3QkFBQztZQUFELENBcERBLEFBb0RDLElBQUE7WUFwREQsaURBb0RDLENBQUEiLCJmaWxlIjoic2hhcmVkL3NlcnZpY2VzL3ZhbGlkYXRpb24uc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBWYWxpZGF0aW9uU2VydmljZSB7XHJcbiAgICAgXHJcbiAgICBzdGF0aWMgZ2V0VmFsaWRhdG9yRXJyb3JNZXNzYWdlKGNvZGU6IHN0cmluZykge1xyXG4gICAgICAgIGxldCBjb25maWcgPSB7XHJcbiAgICAgICAgICAgICdyZXF1aXJlZCc6ICdSZXF1aXJlZCcsXHJcbiAgICAgICAgICAgICdtaW5sZW5ndGgnOiAnTmFtZSBzaG91bGQgY29udGFpbiBhdCBsZWFzdCAzIGNoYXJhY3RlcnMnLFxyXG4gICAgICAgICAgICAnbWF4bGVuZ3RoJzogJ05hbWUgc2hvdWxkIGJlIGxlc3MgdGhhbiAzMCBjaGFyYWN0ZXJzJyxcclxuICAgICAgICAgICAgJ2ludmFsaWROYW1lTGVuZ3RoJzogJ05hbWUgc2hvdWxkICBjb250YWlucyBtaW5pbXVtIDIgY2hhcmFjdGVycyBhbmQgbm90IG1vcmUgdGhhbiAzMC4gJyxcclxuICAgICAgICAgICAgJ2ludmFsaWRDcmVkaXRDYXJkJzogJ0lzIGludmFsaWQgY3JlZGl0IGNhcmQgbnVtYmVyJyxcclxuICAgICAgICAgICAgJ2ludmFsaWRFbWFpbEFkZHJlc3MnOiAnSW52YWxpZCBlbWFpbCBhZGRyZXNzJyxcclxuICAgICAgICAgICAgJ2ludmFsaWRQYXNzd29yZCc6ICdJbnZhbGlkIHBhc3N3b3JkLiBQYXNzd29yZCBtdXN0IGJlIGF0IGxlYXN0IDYgY2hhcmFjdGVycyBsb25nLCBhbmQgY29udGFpbiBhIG51bWJlci4nXHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gY29uZmlnW2NvZGVdO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjcmVkaXRDYXJkVmFsaWRhdG9yKGNvbnRyb2wpIHtcclxuICAgICAgICAvLyBWaXNhLCBNYXN0ZXJDYXJkLCBBbWVyaWNhbiBFeHByZXNzLCBEaW5lcnMgQ2x1YiwgRGlzY292ZXIsIEpDQlxyXG4gICAgICAgIGlmIChjb250cm9sLnZhbHVlLm1hdGNoKC9eKD86NFswLTldezEyfSg/OlswLTldezN9KT98NVsxLTVdWzAtOV17MTR9fDYoPzowMTF8NVswLTldWzAtOV0pWzAtOV17MTJ9fDNbNDddWzAtOV17MTN9fDMoPzowWzAtNV18WzY4XVswLTldKVswLTldezExfXwoPzoyMTMxfDE4MDB8MzVcXGR7M30pXFxkezExfSkkLykpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgJ2ludmFsaWRDcmVkaXRDYXJkJzogdHJ1ZSB9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICBcclxuICAgIHN0YXRpYyBlbWFpbFZhbGlkYXRvcihjb250cm9sKSB7XHJcbiAgICAgICAgLy8gUkZDIDI4MjIgY29tcGxpYW50IHJlZ2V4XHJcbiAgICAgICAgaWYgKGNvbnRyb2wudmFsdWUubWF0Y2goL1thLXowLTkhIyQlJicqKy89P15fYHt8fX4tXSsoPzpcXC5bYS16MC05ISMkJSYnKisvPT9eX2B7fH1+LV0rKSpAKD86W2EtejAtOV0oPzpbYS16MC05LV0qW2EtejAtOV0pP1xcLikrW2EtejAtOV0oPzpbYS16MC05LV0qW2EtejAtOV0pPy8pKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7ICdpbnZhbGlkRW1haWxBZGRyZXNzJzogdHJ1ZSB9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgIHN0YXRpYyBuYW1lVmFsaWRhdG9yKGNvbnRyb2wpIHtcclxuICAgICAgICAvLyB7NiwxMDB9ICAgICAgICAgICAtIEFzc2VydCBwYXNzd29yZCBpcyBiZXR3ZWVuIDYgYW5kIDEwMCBjaGFyYWN0ZXJzXHJcbiAgICAgICAgLy8gKD89LipbMC05XSkgICAgICAgLSBBc3NlcnQgYSBzdHJpbmcgaGFzIGF0IGxlYXN0IG9uZSBudW1iZXJcclxuICAgICAgICBpZiAoY29udHJvbC52YWx1ZS5tYXRjaCgvXihbYS16QS1aXVxccyl7MywzMH0kLykpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgJ2ludmFsaWROYW1lTGVuZ3RoJzogdHJ1ZSB9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICBcclxuICAgIHN0YXRpYyBwYXNzd29yZFZhbGlkYXRvcihjb250cm9sKSB7XHJcbiAgICAgICAgLy8gezYsMTAwfSAgICAgICAgICAgLSBBc3NlcnQgcGFzc3dvcmQgaXMgYmV0d2VlbiA2IGFuZCAxMDAgY2hhcmFjdGVyc1xyXG4gICAgICAgIC8vICg/PS4qWzAtOV0pICAgICAgIC0gQXNzZXJ0IGEgc3RyaW5nIGhhcyBhdCBsZWFzdCBvbmUgbnVtYmVyXHJcbiAgICAgICAgaWYgKGNvbnRyb2wudmFsdWUubWF0Y2goL14oPz0uKlswLTldKVthLXpBLVowLTkhQCMkJV4mKl17NiwxMDB9JC8pKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7ICdpbnZhbGlkUGFzc3dvcmQnOiB0cnVlIH07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
