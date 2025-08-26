

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Us Email Template</title>
    <!--[if mso]>
    <noscript>
        <xml>
            <o:OfficeDocumentSettings>
                <o:PixelsPerInch>96</o:PixelsPerInch>
            </o:OfficeDocumentSettings>
        </xml>
    </noscript>
    <![endif]-->
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            padding: 20px;
        }
        
        .container {
            max-width: 600px;
            margin: 0 auto;
            background: white;
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
            animation: slideIn 0.5s ease-out;
        }
        
        @keyframes slideIn {
            from {
                opacity: 0;
                transform: translateY(-30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 40px 30px;
            text-align: center;
            position: relative;
            overflow: hidden;
        }
        
        .header::before {
            content: '';
            position: absolute;
            top: -50%;
            right: -50%;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
            animation: rotate 20s linear infinite;
        }
        
        @keyframes rotate {
            from {
                transform: rotate(0deg);
            }
            to {
                transform: rotate(360deg);
            }
        }
        
        .header h1 {
            font-size: 32px;
            margin-bottom: 10px;
            position: relative;
            z-index: 1;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
        }
        
        .header p {
            font-size: 16px;
            opacity: 0.95;
            position: relative;
            z-index: 1;
        }
        
        .content {
            padding: 40px 30px;
        }
        
        .subject-line {
            background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
            padding: 15px 20px;
            border-radius: 12px;
            margin-bottom: 30px;
            border-left: 4px solid #667eea;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .subject-line:hover {
            transform: translateX(5px);
            box-shadow: 0 5px 15px rgba(102, 126, 234, 0.2);
        }
        
        .subject-line label {
            font-weight: 600;
            color: #667eea;
            display: block;
            margin-bottom: 5px;
            font-size: 12px;
            text-transform: uppercase;
            letter-spacing: 1px;
        }
        
        .subject-line span {
            color: #333;
            font-size: 16px;
        }
        
        .greeting {
            font-size: 18px;
            color: #333;
            margin-bottom: 20px;
            font-weight: 500;
        }
        
        .message-section {
            background: #f8f9fc;
            padding: 25px;
            border-radius: 12px;
            margin: 20px 0;
            position: relative;
            transition: all 0.3s ease;
        }
        
        .message-section:hover {
            background: #f0f2f7;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
        }
        
        .message-section h3 {
            color: #667eea;
            margin-bottom: 15px;
            font-size: 14px;
            text-transform: uppercase;
            letter-spacing: 1px;
            display: flex;
            align-items: center;
        }
        
        .message-section h3::before {
            content: '▸';
            margin-right: 8px;
            font-size: 18px;
            animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
            0%, 100% {
                opacity: 1;
            }
            50% {
                opacity: 0.5;
            }
        }
        
        .message-section p {
            color: #555;
            line-height: 1.8;
            margin-bottom: 10px;
        }
        
        .highlight {
            background: linear-gradient(120deg, #ffd700 0%, #ffed4e 100%);
            padding: 2px 6px;
            border-radius: 4px;
            font-weight: 500;
            animation: glow 2s ease-in-out infinite;
        }
        
        @keyframes glow {
            0%, 100% {
                box-shadow: 0 0 5px rgba(255, 215, 0, 0.5);
            }
            50% {
                box-shadow: 0 0 20px rgba(255, 215, 0, 0.8);
            }
        }
        
        .details-list {
            list-style: none;
            margin: 15px 0;
        }
        
        .details-list li {
            padding: 10px 0;
            border-bottom: 1px solid #e0e0e0;
            display: flex;
            align-items: center;
            transition: background 0.3s ease;
        }
        
        .details-list li:hover {
            background: rgba(102, 126, 234, 0.05);
            padding-left: 10px;
        }
        
        .details-list li:last-child {
            border-bottom: none;
        }
        
        .details-list li::before {
            content: '✓';
            color: #4caf50;
            font-weight: bold;
            margin-right: 10px;
            font-size: 18px;
        }
        
        .cta-section {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            padding: 25px;
            border-radius: 12px;
            margin: 30px 0;
            text-align: center;
            position: relative;
            overflow: hidden;
        }
        
        .cta-section::after {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
            animation: shine 3s infinite;
        }
        
        @keyframes shine {
            0% {
                left: -100%;
            }
            100% {
                left: 100%;
            }
        }
        
        .cta-section p {
            color: white;
            font-size: 16px;
            margin-bottom: 15px;
            position: relative;
            z-index: 1;
        }
        
        .cta-button {
            display: inline-block;
            background: white;
            color: #667eea;
            padding: 12px 30px;
            border-radius: 50px;
            text-decoration: none;
            font-weight: 600;
            transition: all 0.3s ease;
            position: relative;
            z-index: 1;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }
        
        .cta-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
            background: #f0f0f0;
        }
        
        .signature {
            margin-top: 30px;
            padding-top: 30px;
            border-top: 2px solid #e0e0e0;
        }
        
        .signature p {
            margin: 5px 0;
            color: #555;
        }
        
        .signature .name {
            font-weight: 600;
            font-size: 18px;
            color: #333;
            margin-bottom: 10px;
        }
        
        .contact-info {
            background: #f8f9fc;
            padding: 15px;
            border-radius: 8px;
            margin-top: 15px;
        }
        
        .contact-info p {
            margin: 5px 0;
            font-size: 14px;
            display: flex;
            align-items: center;
        }
        
        .contact-info p::before {
            margin-right: 10px;
            font-size: 16px;
        }
        
        .contact-info .email::before {
            content: '📧';
        }
        
        .contact-info .phone::before {
            content: '📱';
        }
        
        .contact-info .account::before {
            content: '🔖';
        }
        
        .footer {
            background: #f5f7fa;
            padding: 30px;
            text-align: center;
            border-top: 1px solid #e0e0e0;
        }
        
        .footer p {
            color: #888;
            font-size: 14px;
            margin-bottom: 15px;
        }
        
        .social-links {
            margin-top: 20px;
        }
        
        .social-links a {
            display: inline-block;
            width: 40px;
            height: 40px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            text-decoration: none;
            border-radius: 50%;
            line-height: 40px;
            margin: 0 10px;
            transition: all 0.3s ease;
            font-size: 20px;
        }
        
        .social-links a:hover {
            transform: translateY(-5px) rotate(360deg);
            box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
        }
        
        @media (max-width: 600px) {
            .header h1 {
                font-size: 24px;
            }
            
            .content {
                padding: 30px 20px;
            }
            
            .message-section {
                padding: 20px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <!-- Header -->
        <div class="header">
            <h1>Contact Inquiry</h1>
            <p>A new message from Hermes Advisory Partner</p>
        </div>
        
        <!-- Content -->
        <div class="content">
            <!-- Details Section -->
            <div class="message-section">
							<div>
								Phone number: {{ $data['phone_number'] }}
							</div>
							<div>
								Name: {{ $data['name'] }}
							</div>
							<div>
								Email: {{ $data['email'] }}
							</div>
							<div>
								Company name: {{ $data['company_name'] }}
							</div>
							<div>
								Message: {{ $data['message'] }}
							</div>
            </div>
        </div>
    </div>
</body>
</html>