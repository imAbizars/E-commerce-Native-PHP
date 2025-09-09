<!-- header.php -->
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo APP_NAME;?></title>
    <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet">
    <?php if ($page === 'dashboard'): ?>
        <link rel="stylesheet" href="public/assets/dashboard.css?v=<?php echo ASSET_VERSION; ?>">
    <?php else: ?>
        <link rel="stylesheet" href="public/assets/style.css?v=<?php echo ASSET_VERSION; ?>">
    <?php endif; ?>
    <script src="public/assets/script.js"></script>

</head>
<body>
    