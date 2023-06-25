# Microsoft Bookings

## Sample Bookings Queries

## Get Staff Availability
https://graph.microsoft.com/v1.0/solutions/bookingBusinesses/TestBusiness@dwsnow.com/microsoft.graph.getStaffAvailability

## Getting business hours
GET https://graph.microsoft.com/v1.0/solutions/bookingBusinesses/test@contoso.onmicrosoft.com

## Services
GET https://graph.microsoft.com/v1.0/solutions/bookingBusinesses/test@contoso.onmicrosoft.com/services

## Staff Members
GET https://graph.microsoft.com/v1.0/solutions/bookingBusinesses/test@contoso.onmicrosoft.com/staffMembers

## Get single staff 
GET /solutions/bookingBusinesses/{id}/staffMembers/{id}

## fetching events from staff's outlook calendar
POST https://graph.microsoft.com/v1.0/users/emailAddress/calendar/getschedule
GET https://graph.microsoft.com/v1.0/solutions/bookingBusinesses/Contosolunchdelivery@contoso.onmicrosoft.com/calendarView?start=2018-04-30T00:00:00Z&end=2018-05-10T00:00:00Z

## Fluent UI Web Components Calendar
https://fluent-components.azurewebsites.net/?path=/docs/components-calendar--calendar

## Fluent UI Web Components can be used in React applications
https://fluent-components.azurewebsites.net/?path=/docs/integrations-react--page
    
## Microsoft Bookings Connector in Power Automate
https://meganvwalker.com/microsoft-bookings-connector-in-power-automate/

# MGT GET Component Properties
<table border="1" aria-label="Properties and attributes" class="table table-sm">
<thead>
<tr>
<th>Attribute</th>
<th>Property</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>resource</td>
<td>resource</td>
<td>The resource to get from Microsoft Graph (for example, <code>/me</code>).</td>
</tr>
<tr>
<td>scopes</td>
<td>scopes</td>
<td>Optional array of strings if using the property or a comma delimited scope if using the attribute. The component will use these scopes (with a supported provider) to ensure that the user has consented to the right permission.</td>
</tr>
<tr>
<td>version</td>
<td>version</td>
<td>Optional API version to use when making the GET request. Default is <code>v1.0</code>.</td>
</tr>
<tr>
<td>max-pages</td>
<td>maxPages</td>
<td>Optional number of pages (for resources that support paging). Default is 3. Setting this value to 0 will get all pages.</td>
</tr>
<tr>
<td>polling-rate</td>
<td>pollingRate</td>
<td>Optional number of milliseconds. When set, the component will poll the request URI for updates in the defined interval. If using a delta query, polling will always query the delta API. The template will only refresh when the data changes.</td>
</tr>
<tr>
<td>cache-enabled</td>
<td>cacheEnabled</td>
<td>Optional Boolean. When set, it indicates that the response from the resource will be cached. Overriden if <code>refresh()</code> is called or if <code>pollingRate</code> is in use. Default is <code>false</code>.</td>
</tr>
<tr>
<td>cache-invalidation-period</td>
<td>cacheInvalidationPeriod</td>
<td>Optional number of milliseconds. When set in combination with <code>cacheEnabled</code>, the delay before the cache reaches its invalidation period will be modified by this value. Default is <code>0</code> and will use the default invalidation period.</td>
</tr>
<tr>
<td>type</td>
<td>type</td>
<td>Optional type of the expected response. Default is <code>json</code>. Supports <code>json</code> or <code>image</code> (only be supported on endpoints ending with <code>/photo/value$</code>).</td>
</tr>
<tr>
<td>N/A</td>
<td>response</td>
<td>Read-only response from Microsoft Graph if request was successful.</td>
</tr>
<tr>
<td>N/A</td>
<td>error</td>
<td>Read-only error from Microsoft Graph if request was not successful.</td>
</tr>
</tbody>
</table>
    
#Wordpress Plugin Shortcodes/Parameter    
<table border="1" width="100%">
<tbody>
<tr>
<th scope="col">Parameter</th>
<th scope="col">Description</th>
<th scope="col">Example</th>
<th scope="col">Required</th>
<th scope="col">Default</th>
</tr>
<tr>
<td>businessid</td>
<td>office 365 booking business ID</td>
<td><code>businessid="TestBusiness1@domain.com"<code></code></code></td>
<td>X</td>
<td></td>
</tr>
<tr>
<td>template</td>
<td>PHP template name to show the data</td>
<td><code>template="long_form_tpl.php"</code></td>
<td>X</td>
<td></td>
</tr>
<tr>
<td>userbinding</td>
<td>To show the data guest or logged in user</td>
<td><code>userbinding="yes"</code></td>
<td></td>
<td>no</td>
</tr>
<tr>
<td>time_diff</td>
<td>Time Difference in minutes to adjust the meetings</td>
<td><code>time_diff="-300"</code></td>
<td>X</td>
<td>0</td>
</tr>
<tr>
<td>timeformat</td>
<td>Time format in 12 or 24 hours</td>
<td><code>timeformat="12"</code></td>
<td>X</td>
<td>24</td>
</tr>
<tr>
<td>is_workflow</td>
<td>Send booking data to endpoint, instead of microsoft booking</td>
<td><code>is_workflow="yes"</code></td>
<td></td>
<td>no</td>
</tr>
<tr>
<td>workflow_url</td>
<td>Send booking data on given url</td>
<td><code>workflow_url="https://wpintegrate.com/"</code></td>
<td></td>
<td></td>
</tr>
<tr>
<td>accept_payment</td>
<td>Accept payment via stripe</td>
<td>accept_payment="yes"</td>
<td></td>
<td>no</td>
</tr>
<tr>
<td>text_overwrite</td>
<td>Overwrite the text/labels used in the interface.</td>
<td><code>text_overwrite='{"select_service": "","select_time": "","add_your_details": "","submit_button_txt": "", "message":"", "your_name":"", "creditordebitcard":"", "message_heading":"","address_here": "","thank_you_message":"","slot_not_available":"Er is geen consultatie vrij op deze dag. Gelieve een andere dag te selecteren.","phone":"+32 473 65 23 89","email":"naam@domeinnaam.be","minutes":"minuten"}'</code></td>
<td></td>
<td></td>
</tr>
<tr>
<td>cal_locale</td>
<td>Specify the locale used by the calendar section.</td>
<td><code>cal_locale="es"</code></td>
<td></td>
<td>en</td>
</tr>
<tr>
<td>aboveservice</td>
<td>Show content or custom fields before services section. Custom input fields shoud have class="o365_ms_booking_customfield" this class and data-name="Type of appointment" can be also used as input key</td>
<td><code>aboveservice="templatename.php"</code></td>
<td></td>
<td></td>
</tr>
<tr>
<td>belowservice</td>
<td>Show content or custom fields after services section. Custom input fields shoud have class="o365_ms_booking_customfield" this class and data-name="Type of appointment" can be also used as input key</td>
<td><code>belowservice="templatename.php"</code></td>
<td></td>
<td></td>
</tr>
<tr>
<td>belowstaffavail</td>
<td>Show content or custom fields after staff section. Custom input fields shoud have class="o365_ms_booking_customfield" this class and data-name="Type of appointment" can be also used as input key</td>
<td><code>belowstaffavail="templatename.php"</code></td>
<td></td>
<td></td>
</tr>
<tr>
<td>belowcontactdetail</td>
<td>Show content or custom fields after contact form section. Custom input fields shoud have class="o365_ms_booking_customfield" this class and data-name="Type of appointment" can be also used as input key</td>
<td><code>belowcontactdetail="templatename.php"</code></td>
<td></td>
<td></td>
</tr>
<tr>
<td>customsubmit</td>
<td>Show content or custom fields after submit button. Custom input fields shoud have class="o365_ms_booking_customfield" this class and data-name="Type of appointment" can be also used as input key</td>
<td><code>customsubmit="templatename.php"</code></td>
<td></td>
<td></td>
</tr>
<tr>
<td>show_service_image</td>
<td>show_service_image parameter is used to show custom images. If show_service_image="yes" then you need to put service images in the theme folder, <strong>/wp-content/themes/your-theme/o365-display/ms-booking/assets/businessid/</strong>. All the service images should have exact name of service.</td>
<td><code>show_service_image="yes"</code></td>
<td></td>
<td>no</td>
</tr>
<tr>
<td>showbusinessinfo</td>
<td>Show business information below the booking page.</td>
<td><code>showbusinessinfo="yes"</code></td>
<td></td>
<td>no</td>
</tr>
<tr>
<td>showtimezone</td>
<td>Show timezone below the service with date.</td>
<td><code>showtimezone="yes"</code></td>
<td></td>
<td>yes</td>
</tr>
<tr>
<td>default_service</td>
<td>Set default service for this booking page.(multiple services supported)</td>
<td><code>default_service="serviceid1,serviceid2,serviceid3"</code></td>
<td></td>
<td></td>
</tr>
<tr>
<td>booking_default_selected_service</td>
<td>Set default selected service for this booking page.</td>
<td><code>default_service="serviceid1"</code></td>
<td></td>
<td></td>
</tr>
<tr>
<td>default_staff</td>
<td>Allowed staff for WordPress page. Multiple staff supported, staffids should be comma separated.</td>
<td><code>default_staff="staffid"</code></td>
<td></td>
<td></td>
</tr>
<tr>
<td>is_redirect</td>
<td>Is booking page redirected to other page after successfull booking.</td>
<td><code>is_redirect="yes|no"</code></td>
<td></td>
<td>no</td>
</tr>
<tr>
<td>redirect_url</td>
<td>Redirected URL for redirection after successfull booking. The page will only redirect if is_redirect is YES.</td>
<td><code>redirect_url="url"</code></td>
<td></td>
<td></td>
</tr>
<tr>
<td>firstday</td>
<td>Starting day of the booking calendar. 0 =&gt; Sunday, 1 =&gt; Monday, .... and so on</td>
<td><code>firstday="0"</code></td>
<td></td>
<td>0</td>
</tr>
<tr>
<td>timezone</td>
<td>This timezone is Required. it will calculate DST time difference if any. <a href="https://www.php.net/manual/en/timezones.php">List of supported timezone</a></td>
<td><code>timezone="America/New_York"</code></td>
<td>X</td>
<td>America/New_York</td>
</tr>
<tr>
<td>hourdiff</td>
<td>Daylight time difference.</td>
<td><code>hourdiff="-1"</code></td>
<td></td>
<td>-1</td>
</tr>
</tbody>
</table>
    
    
