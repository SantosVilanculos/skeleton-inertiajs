import Layout from '@/layout';

export default ({ VERSION, PHP_VERSION }: { VERSION: string; PHP_VERSION: string }) => {
    return (
        <Layout heading="Dashboard">
            <p>
                Laravel v{VERSION} (PHP v{PHP_VERSION})
            </p>
        </Layout>
    );
};
